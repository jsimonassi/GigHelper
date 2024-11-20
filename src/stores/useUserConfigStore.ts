import { create } from 'zustand';
import { TimbreConfig } from '../types/app/UserConfig';
import { StorageService } from '../services/StorageService';

const CACHE_KEYS = {
    userConfigKey: 'useUserConfigStore-userConfig',
};
//<Button title="06" onPress={() => NativeGigHelperCore.sendControlCommand(0, 74, 127)} />

interface UserConfigStore {
    timbreSet: TimbreConfig[];
    updateTimbreSet: (timbreSet: TimbreConfig[]) => Promise<void>;
    loadUserConfig: () => Promise<void>;
}

const initializeMap = () => {
    const responseArray = Array.from({ length: 128 }, (_, i) => i).map((midiValue) => {
        return { name: midiValue.toString(), midiValue: [0, 74, midiValue] };
    });
    return responseArray;
};

export const useUserConfigStore = create<UserConfigStore>((set) => ({
    timbreSet: initializeMap(),
    updateTimbreSet: async (timbreSet: TimbreConfig[]) => {
        try{
            set({ timbreSet });
            await StorageService.set(CACHE_KEYS.userConfigKey, JSON.stringify({ timbreSet }));
        }catch(e){
            return Promise.reject(e);
        }
    },
    loadUserConfig: async () => {
        try{
            const userConfig = await StorageService.get(CACHE_KEYS.userConfigKey);
            if (userConfig) {
                const parsedUserConfig = JSON.parse(userConfig) as { timbreSet: [TimbreConfig] };
                set({
                    timbreSet: parsedUserConfig.timbreSet,
                });
            }
        }catch(e){
            return Promise.reject(e);
        }
    },
}));

