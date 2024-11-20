import { useEffect } from 'react';
import { useUserGigsStore } from '../../../stores/useUserGigsStore';

export const useGigs = () => {
    const { userGigs, addUserGig, removeUserGig, loadUserGigs } = useUserGigsStore();

    useEffect(() => {
        loadUserGigs();
    }, [loadUserGigs]);

    return {
        userGigs,
        addUserGig,
        removeUserGig,
    };
};
