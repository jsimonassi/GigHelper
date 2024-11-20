import { useEffect } from 'react';
import { useUserConfigStore } from '../../../stores/useUserConfigStore';
import { useUserGigsStore } from '../../../stores/useUserGigsStore';

export const useLoadData = () => {
    const { loadUserGigs } = useUserGigsStore();
    const { loadUserConfig } = useUserConfigStore();

    useEffect(() => {
        loadUserGigs();
        loadUserConfig();
    }, [loadUserGigs, loadUserConfig]);
};
