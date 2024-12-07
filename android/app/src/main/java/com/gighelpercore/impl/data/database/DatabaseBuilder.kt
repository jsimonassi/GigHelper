package com.gighelpercore.impl.data.database

import android.content.Context
import androidx.room.Room

class DatabaseBuilder private constructor(context: Context) {

    val db: AppDatabase = Room.databaseBuilder(
        context.applicationContext,
        AppDatabase::class.java,
        DATABASE_NAME
    ).build()

    companion object {
        private const val DATABASE_NAME = "gigHelperDatabase"

        @Volatile
        private var INSTANCE: DatabaseBuilder? = null

        fun getInstance(context: Context): DatabaseBuilder {
            return INSTANCE ?: synchronized(this) {
                INSTANCE ?: DatabaseBuilder(context).also { INSTANCE = it }
            }
        }
    }
}