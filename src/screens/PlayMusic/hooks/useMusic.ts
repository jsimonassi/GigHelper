import { useCallback, useEffect, useState } from 'react';
import { UserGig } from '../../../types/app/UserGig';
import { GigHelperCoreService } from '../../../services/GigHelperCoreService';

export const useMusic = (currentGig: UserGig, musicIndex: number) => {
    const [currentMusicInfo, setCurrentMusicInfo] = useState(currentGig.setList[musicIndex]);
    const [currentMusicIndex, setCurrentMusicIndex] = useState(musicIndex);
    const totalSongs = currentGig.setList.length;


    const sendMidiMessage = useCallback((timbreIndex: number) => {
        const timbreData = currentMusicInfo.timbres[timbreIndex];
        if(timbreData){
            GigHelperCoreService.sendControlCommand(timbreData.midiValue[0], timbreData.midiValue[1], timbreData.midiValue[2]);
        }
    }, [currentMusicInfo]);


    useEffect(() => {
        sendMidiMessage(0);
    }, [currentMusicInfo, sendMidiMessage]);


    const nextMusic = useCallback(() => {
        if(currentMusicIndex + 1 < totalSongs){
            setCurrentMusicIndex(currentMusicIndex + 1);
            setCurrentMusicInfo(currentGig.setList[currentMusicIndex + 1]);
        }
    }, [currentMusicIndex, currentGig.setList, totalSongs]);


    const previousMusic = useCallback(() => {
        if(currentMusicIndex - 1 >= 0){
            setCurrentMusicIndex(currentMusicIndex - 1);
            setCurrentMusicInfo(currentGig.setList[currentMusicIndex - 1]);
        }
    }, [currentMusicIndex, currentGig.setList]);

    return {
        currentMusicInfo,
        currentMusicIndex,
        totalSongs,
        nextMusic,
        previousMusic,
    };
};
