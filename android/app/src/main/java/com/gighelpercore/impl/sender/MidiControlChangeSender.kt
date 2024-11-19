package com.gighelpercore.impl.sender

import android.content.Context
import android.media.midi.MidiManager
import android.os.Build
import com.gighelpercore.impl.model.GigHelperMidiCommand

object MidiControlChangeSender {

    fun sendCommand(context: Context, gigCommand: GigHelperMidiCommand) {
        val command = gigCommand.toByteArray()
        val midiManager = context.getSystemService(Context.MIDI_SERVICE) as MidiManager
        val devices = if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.TIRAMISU) {
            midiManager.getDevicesForTransport(MidiManager.TRANSPORT_MIDI_BYTE_STREAM).toList()
        } else {
            midiManager.devices.toList()
        }

        for (device in devices) {
            val outputPortCount = device.outputPortCount
            if (outputPortCount > 0) {
                midiManager.openDevice(device, { midiDevice ->
                    val outputPort = midiDevice.openInputPort(0)
                    outputPort.send(command, 0, command.size)
                    outputPort.close()
                    midiDevice.close()
                }, null)
            }
        }
    }
}