package com.gighelpercore.impl.data.repository

import android.content.Context
import com.gighelpercore.impl.data.database.DatabaseBuilder

class TimbreConfigRepository {

    fun saveTimbreConfig(context: Context) {
        getDao(context).insertAll()
    }

    private fun getDao(context: Context) = DatabaseBuilder.getInstance(context).db.timbreConfigDao()

}