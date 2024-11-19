package com.gighelpercore.impl.model

class GigHelperMidiCommand(
    val channel: Int,
    val command: Int,
    val value: Int
) {

    fun toByteArray(): ByteArray {
        return byteArrayOf(
            (0xB0 + channel).toByte(),
            command.toByte(),
            value.toByte()
        )
    }

}