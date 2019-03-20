/* @flow */

import { ZalgoPromise } from 'zalgo-promise/src';
import { isSameDomain, getOpener, getDomain, getFrameByName, type CrossDomainWindowType } from 'cross-domain-utils/src';
import { weakMapMemoize, noop } from 'belter/src';

import { WINDOW_PROP } from '../conf';
import { global } from '../global';

import { needsBridge, registerRemoteWindow, rejectRemoteSendMessage, registerRemoteSendMessage, getBridgeName } from './common';

let awaitRemoteBridgeForWindow = weakMapMemoize((win : CrossDomainWindowType) : ZalgoPromise<?CrossDomainWindowType> => {
    return ZalgoPromise.try(() => {
        try {
            let frame = getFrameByName(win, getBridgeName(getDomain()));

            if (!frame) {
                return;
            }

            // $FlowFixMe
            if (isSameDomain(frame) && frame[WINDOW_PROP.POSTROBOT]) {
                return frame;
            }

            return new ZalgoPromise(resolve => {

                let interval;
                let timeout;

                interval = setInterval(() => {
                    // $FlowFixMe
                    if (frame && isSameDomain(frame) && frame[WINDOW_PROP.POSTROBOT]) {
                        clearInterval(interval);
                        clearTimeout(timeout);
                        return resolve(frame);
                    }
                }, 100);

                timeout = setTimeout(() => {
                    clearInterval(interval);
                    return resolve();
                }, 2000);
            });

        } catch (err) {
            // pass
        }
    });
});

export function openTunnelToOpener() : ZalgoPromise<void> {
    return ZalgoPromise.try(() => {

        const opener = getOpener(window);

        if (!opener) {
            return;
        }

      // Try to obtain domain of opener. This will fail if opener is not on same domain.
      // If it is on same domain, then we'll pass opener domain into needsBridge which will return false.
      let domain;
      try {
        domain = getDomain(opener);
      } catch (e) {
        domain = null;
      }


      if (!needsBridge({ win: opener, domain: domain })) {
            return;
        }

        registerRemoteWindow(opener);

        return awaitRemoteBridgeForWindow(opener).then(bridge => {

            if (!bridge) {
                return rejectRemoteSendMessage(opener, new Error(`Can not register with opener: no bridge found in opener`));
            }

            if (!window.name) {
                return rejectRemoteSendMessage(opener, new Error(`Can not register with opener: window does not have a name`));
            }

            return bridge[WINDOW_PROP.POSTROBOT].openTunnelToParent({

                name: window.name,

                source: window,

                canary() {
                    // pass
                },

                sendMessage(message) {

                    try {
                        noop(window);
                    } catch (err) {
                        return;
                    }

                    if (!window || window.closed) {
                        return;
                    }

                    try {
                        global.receiveMessage({
                            data:   message,
                            origin: this.origin,
                            source: this.source
                        });
                    } catch (err) {
                        ZalgoPromise.reject(err);
                    }
                }

            }).then(({ source, origin, data }) => {

                if (source !== opener) {
                    throw new Error(`Source does not match opener`);
                }

                registerRemoteSendMessage(source, origin, data.sendMessage);

            }).catch(err => {

                rejectRemoteSendMessage(opener, err);
                throw err;
            });
        });
    });
}
