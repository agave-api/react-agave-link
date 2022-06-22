import { useCallback } from 'react';
import useScript from './useScriptHooks';
import { UseAgaveLinkProps, UseAgaveLinkResponse } from './types';

export const useAgaveLink = (config: UseAgaveLinkProps): UseAgaveLinkResponse => {
    const [loading, error] = useScript({
        src: 'https://app.agaveapi.com/init.js',
        checkForExisting: true,
    });
    const isServer = typeof window === 'undefined';
    const isReady = !isServer && !!window.AgaveLink && !loading && !error;

    const openLink = useCallback(
        (overrideConfig?: Partial<UseAgaveLinkProps>) => {
            if (window?.AgaveLink) {
                window.AgaveLink.openLink({
                    ...config,
                    ...overrideConfig,
                });
            }
        },
        [config]
    );

    return { openLink, isReady, error };
};
