// Copyright (C) 2019, Zpalmtree
//
// Please see the included LICENSE file for more information.

import { Sentry } from 'react-native-sentry';

import Config from './Config';

/* Manually comparing to TurtleCoin to try and prevent getting errors reported
   for forks... */
/* DO NOT CHANGE THIS LINE WITHOUT ALSO ALTERING THE Sentry.config() LINE - See readme and sentry docs. */
const sentryIsEnabled = !__DEV__ && Config.coinName === 'DyngeCoin';

export function reportCaughtException(err) {
    if (sentryIsEnabled) {
        try {
            Sentry.captureException(err);
        } catch (e) {
        }
    }
}

export function initSentry() {
    if (sentryIsEnabled) {
        /* CHANGE THIS IF YOU ARE FORKING! */
        Sentry.config('https://').install();
        Sentry.setVersion(Config.appVersion);
    }
}
