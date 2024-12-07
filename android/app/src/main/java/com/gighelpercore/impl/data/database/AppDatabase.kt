package com.gighelpercore.impl.data.database

import androidx.room.Database
import androidx.room.RoomDatabase
import androidx.room.TypeConverters
import com.gighelpercore.impl.data.converters.ListIntToJsonConverter
import com.gighelpercore.impl.data.dao.TimbreConfigDao
import com.gighelpercore.impl.data.entities.TimbreConfig

@Database(entities = [TimbreConfig::class], version = 1)
@TypeConverters(ListIntToJsonConverter::class)
abstract class AppDatabase: RoomDatabase() {
    abstract fun timbreConfigDao(): TimbreConfigDao
}