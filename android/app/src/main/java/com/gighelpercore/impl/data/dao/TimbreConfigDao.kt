package com.gighelpercore.impl.data.dao

import androidx.room.Dao
import androidx.room.Delete
import androidx.room.Insert
import androidx.room.Query
import com.gighelpercore.impl.data.entities.TimbreConfig

@Dao
interface TimbreConfigDao {
    @Query("SELECT * FROM TimbreConfig")
    fun getAll(): List<TimbreConfig>

    @Insert
    fun insertAll(vararg users: TimbreConfig)

    @Delete
    fun delete(user: TimbreConfig)
}