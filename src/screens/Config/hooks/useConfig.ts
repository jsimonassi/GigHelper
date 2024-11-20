import { useEffect, useState } from 'react';
import { useUserConfigStore } from '../../../stores/useUserConfigStore';
import { TimbreConfig } from '../../../types/app/UserConfig';

export const useConfig = () => {

    const { timbreSet, loadUserConfig, updateTimbreSet } = useUserConfigStore();
    const [transientTimbreSet, setTransientTimbreSet] = useState<TimbreConfig[]>([]);

    useEffect(() => {
        loadUserConfig();
    }, [loadUserConfig]);

    useEffect(() => {
        setTransientTimbreSet(timbreSet);
    }, [timbreSet]);

    const handleTimbreChange = (index: number, timbre: TimbreConfig) => {
        const newTimbreSet = [...transientTimbreSet];
        newTimbreSet[index] = timbre;
        setTransientTimbreSet(newTimbreSet);
    };

    const saveUpdates = () => {
        return updateTimbreSet(transientTimbreSet);
    };

    return {
        transientTimbreSet,
        handleTimbreChange,
        saveUpdates,
    };
};
