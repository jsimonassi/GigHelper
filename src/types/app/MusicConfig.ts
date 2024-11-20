import { TimbreConfig } from './UserConfig';

export interface MusicConfig {
    name: string;
    pdfChordsPath?: string;
    timbres: TimbreConfig[]
}
