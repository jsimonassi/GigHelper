import { create } from 'zustand';
import { TimbreConfig, UserConfig } from '../types/app/UserConfig';
import { StorageService } from '../services/StorageService';

const CACHE_KEYS = {
    userConfigKey: 'useUserConfigStore-userConfig',
};

interface UserConfigStore extends UserConfig {
    setAppChannel: (appChannel: number) => void;
    removeTimbre: (timbreIndex: number) => void;
    addTimbre: (timbre: TimbreConfig) => void;
    loadUserConfig: () => Promise<void>;
}

export const useUserConfigStore = create<UserConfigStore>((set) => ({
    appChannel: 0,
    timbreSet: new Map(),
    setAppChannel: (appChannel: number) => set({ appChannel }),
    removeTimbre: (timbreIndex: number) => set((state) => {
        const timbreSet = new Map(state.timbreSet);
        timbreSet.delete(timbreIndex);
        return { timbreSet };
    }),
    addTimbre: (timbre: TimbreConfig) => set((state) => {
        const timbreSet = new Map(state.timbreSet);
        timbreSet.set(timbreSet.size, timbre);
        return { timbreSet };
    }),
    loadUserConfig: async () => {
        try{
            const userConfig = await StorageService.get(CACHE_KEYS.userConfigKey);
            if (userConfig) {
                const parsedUserConfig = JSON.parse(userConfig) as UserConfig;
                set({
                    appChannel: parsedUserConfig.appChannel,
                    timbreSet: new Map(parsedUserConfig.timbreSet),
                });
            }
        }catch(e){
            return Promise.reject(e);
        }
    },
}));

