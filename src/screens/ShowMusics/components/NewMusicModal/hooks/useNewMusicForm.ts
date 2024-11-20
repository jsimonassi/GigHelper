import { useState } from 'react';
import { MusicConfig } from '../../../../../types/app/MusicConfig';
import { pick, types } from 'react-native-document-picker';
import { TimbreConfig } from '../../../../../types/app/UserConfig';
import { resolveContentUri } from '../../../../../utils/contentResolver';

export const useNewMusicForm = () => {
    const [newMusic, setNewMusic] = useState<MusicConfig>({
        name: '',
        pdfChordsPath: '',
        timbres: [],
    });
    const [error, setError] = useState('');

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
