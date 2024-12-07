import { TimbreConfig } from '../../specs/NativeGigHelperCore';

export interface MusicConfig {
    name: string;
    pdfChordsPath?: string;
    timbres: TimbreConfig[]
}
