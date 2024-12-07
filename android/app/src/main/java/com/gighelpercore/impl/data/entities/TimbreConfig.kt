package com.gighelpercore.impl.data.entities

import androidx.room.Entity
import androidx.room.PrimaryKey

@Entity
data class TimbreConfig(
    @PrimaryKey
    val id: Int,
    val name: String,
    val midiValues: List<Int>,
)