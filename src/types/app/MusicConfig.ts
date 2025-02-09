import { TimbreConfig } from '../../specs/NativeGigHelperCore';

export interface MusicConfig {
    id: string;
    index: number;
    name: string;
    pdfChordsPath?: string;
    timbres: TimbreConfig[]
}
