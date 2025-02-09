import { useCallback, useEffect, useState } from 'react';
import { MusicConfig } from '../../../../../types/app/MusicConfig';
import { pick, types } from 'react-native-document-picker';
import { resolveContentUri } from '../../../../../utils/contentResolver';
import { TimbreConfig } from '../../../../../specs/NativeGigHelperCore';

export const useEditMusicForm = (currentMusicData: MusicConfig | null) => {
    console.log('useEditMusicForm', currentMusicData);
    const [editedMusic, setEditMusic] = useState<MusicConfig>(currentMusicData || {
        name: '',
        pdfChordsPath: '',
        timbres: [],
        id: '',
        index: 0,
    });

    const resetStates = useCallback(() => {
        if (currentMusicData) {
            setEditMusic(currentMusicData);
        } else {
            setEditMusic({
                name: '',
                pdfChordsPath: '',
                timbres: [],
                id: '',
                index: 0,
            });
        }
    }, [currentMusicData]);

    useEffect(() => {
        resetStates();
    }, [currentMusicData, resetStates]);

    const [error, setError] = useState('');

    const handleNameChange = (name: string) => {
        if (name === '') {
            setError('Nome da música é obrigatório');
            return;
        }else{
            setError('');
        }
        setEditMusic({
            ...editedMusic,
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
                setEditMusic({
                    ...editedMusic,
                    pdfChordsPath: await resolveContentUri(res[0].uri, res[0].name),
                });
            }
        } catch (e) {
            console.log(e);
        }
    };

    const addTimbre = (timbre: TimbreConfig) => {
        setEditMusic({
            ...editedMusic,
            timbres: [...editedMusic.timbres, timbre],
        });
    };

    const removeTimbre = (timbre: TimbreConfig) => {
        setEditMusic({
            ...editedMusic,
            timbres: editedMusic.timbres.filter((t) => t !== timbre),
        });
    };

    const hasTimbre = (timbre: TimbreConfig | undefined) => {
        return editedMusic.timbres.some((t) => t.name === timbre?.name);
    };

    return {
        editedMusic,
        error,
        handleNameChange,
        handleChordFile,
        addTimbre,
        removeTimbre,
        hasTimbre,
    };
};
