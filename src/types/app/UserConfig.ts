export interface UserConfig {
    appChannel: number;
    timbreSet: Map<number, TimbreConfig>;
}

export interface TimbreConfig {
    name: string;
    midiValue: number[];
}
