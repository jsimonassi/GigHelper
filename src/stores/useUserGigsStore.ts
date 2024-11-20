import { create } from 'zustand';
import { UserGig } from '../types/app/UserGig';
import { StorageService } from '../services/StorageService';


const CACHE_KEYS = {
    userGigsKey: 'useUserGigsStore-userGigs',
};

interface UserGigsStore {
    userGigs: UserGig[];
    addUserGig: (userGig: UserGig) => void;
    removeUserGig: (gigId: string) => void;
    updateGig: (gigId: string, userGig: UserGig) => void;
    loadUserGigs: () => Promise<void>;
}

export const useUserGigsStore = create<UserGigsStore>((set) => ({
    userGigs: [],
    addUserGig: (userGig: UserGig) => set((state) => {
        const userGigs = [...state.userGigs, userGig];
        StorageService.set(CACHE_KEYS.userGigsKey, JSON.stringify(userGigs));
        return { userGigs };
    }),
    removeUserGig: (gigId: string) => set((state) => {
        const userGigs = state.userGigs.filter((gig) => gig.id !== gigId);
        StorageService.set(CACHE_KEYS.userGigsKey, JSON.stringify(userGigs));
        return { userGigs };
    }),
    updateGig: (gigId: string, userGig: UserGig) => set((state) => {
        const userGigs = [...state.userGigs];
        const gigIndex = userGigs.findIndex((gig) => gig.id === gigId);
        userGigs[gigIndex] = userGig;
        StorageService.set(CACHE_KEYS.userGigsKey, JSON.stringify(userGigs));
        return { userGigs };
    }),
    loadUserGigs: async () => {
        try {
            const userGigs = await StorageService.get(CACHE_KEYS.userGigsKey);
            if (userGigs) {
                const parsedUserGigs = JSON.parse(userGigs) as UserGig[];
                set({ userGigs: parsedUserGigs });
            }
        } catch (e) {
            return Promise.reject(e);
        }
    },
}));
