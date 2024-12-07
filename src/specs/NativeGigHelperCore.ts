import { TurboModule, TurboModuleRegistry } from 'react-native';

export interface TimbreConfig {
    id: number;
    name: string;
    midiValue: number[];
}

export interface Spec extends TurboModule {
    sendControlCommand(channel: number, knob: number, value: number): void;
    saveTimbreConfig(timbreConfig: TimbreConfig): void;
    getAllTimbres(): Promise<TimbreConfig[]>;
}

export default TurboModuleRegistry.getEnforcing<Spec>('NativeGigHelperCore');
