import { TurboModule, TurboModuleRegistry } from 'react-native';

export interface Spec extends TurboModule {
    sendControlCommand(channel: number, knob: number, value: number): void;
}

export default TurboModuleRegistry.getEnforcing<Spec>('NativeGigHelperCore');
