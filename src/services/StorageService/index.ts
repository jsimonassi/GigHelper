import AsyncStorage from '@react-native-async-storage/async-storage';

export const StorageService = {
    get: (key: string) => {
        return AsyncStorage.getItem(key);
    },
    set: (key: string, value: string) => {
        return AsyncStorage.setItem(key, value);
    },
};
