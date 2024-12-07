import NativeGigHelperCore from '../../specs/NativeGigHelperCore';

export const GigHelperCoreService = {
    sendControlCommand: (channel: number, knob: number, value: number) => {
        NativeGigHelperCore.sendControlCommand(channel, knob, value);
    },
};
