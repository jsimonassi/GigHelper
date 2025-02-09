import { useCallback, useEffect, useState } from 'react';
import { MusicConfig } from '../../../../../types/app/MusicConfig';
import { pick, types } from 'react-native-document-picker';
import { resolveContentUri } from '../../../../../utils/contentResolver';
import { TimbreConfig } from '../../../../../specs/NativeGigHelperCore';
import uuid from 'react-native-uuid';

export const useNewMusicForm = (isVisible: boolean) => {
    const [newMusic, setNewMusic] = useState<MusicConfig>({
        name: '',
        pdfChordsPath: '',
        timbres: [],
        id:  uuid.v4(),
        index: 0,
    });
    const [error, setError] = useState('');

    const resetState = useCallback(() => {
        setNewMusic({
            name: '',
            pdfChordsPath: '',
            timbres: [],
            id: uuid.v4(),
            index: 0,
        });
        setError('');
    }, []);

    useEffect(() => {
        if (!isVisible) {
            resetState();
        }
    }, [isVisible, resetState]);

    const handleNameChange = (name: string) => {
        if (name === '') {
            setError('Nome da música é obrigatório');
            return;
        }else{
            setError('');
        }
        setNewMusic({
            ...newMusic,
            name,
        });
    };

    const handleChordFile = async () => {
        try {
            const res = await pick({
                type: [types.pdf],
            });
            console.log(res);
            if (res.length && res[0].uri && res[0].name) {
                setNewMusic({
                    ...newMusic,
                    pdfChordsPath: await resolveContentUri(res[0].uri, res[0].name),
                });
            }
        } catch (e) {
            console.log(e);
        }
    };

    const addTimbre = (timbre: TimbreConfig) => {
        setNewMusic({
            ...newMusic,
            timbres: [...newMusic.timbres, timbre],
        });
    };

    const removeTimbre = (timbre: TimbreConfig) => {
        setNewMusic({
            ...newMusic,
            timbres: newMusic.timbres.filter((t) => t !== timbre),
        });
    };

    const hasTimbre = (timbre: TimbreConfig | undefined) => {
        return newMusic.timbres.some((t) => t.name === timbre?.name);
    };

    return {
        newMusic,
        error,
        handleNameChange,
        handleChordFile,
        addTimbre,
        removeTimbre,
        hasTimbre,
    };
};
