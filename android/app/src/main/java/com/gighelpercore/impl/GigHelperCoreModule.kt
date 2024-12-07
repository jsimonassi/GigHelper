package com.gighelpercore.impl

import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReadableMap
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

    override fun saveTimbreConfig(timbreConfig: ReadableMap?) {
        TODO("Not yet implemented")
    }

    override fun getAllTimbres(promise: Promise?) {
        TODO("Not yet implemented")
    }
}