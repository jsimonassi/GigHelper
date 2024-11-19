package com.gighelpercore.impl

import com.facebook.react.bridge.ReactApplicationContext
import com.gighelpercore.NativeGigHelperCoreSpec
import com.gighelpercore.impl.model.GigHelperMidiCommand
import com.gighelpercore.impl.sender.MidiControlChangeSender

class GigHelperCoreModule(reactContext: ReactApplicationContext) : NativeGigHelperCoreSpec(reactContext) {

    companion object {
        const val NAME = NativeGigHelperCoreSpec.NAME
    }

    override fun sendControlCommand(channel: Double, knob: Double, value: Double) {
        val gigCommand = GigHelperMidiCommand(channel.toInt(), knob.toInt(), value.toInt())
        MidiControlChangeSender.sendCommand(reactApplicationContext, gigCommand)
    }
}