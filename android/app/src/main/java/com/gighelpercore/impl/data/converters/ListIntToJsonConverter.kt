package com.gighelpercore.impl.data.converters

import androidx.room.TypeConverter
import com.google.gson.Gson
import com.google.gson.reflect.TypeToken

class ListIntToJsonConverter {

    private val gson = Gson()

    @TypeConverter
    fun fromListIntToJson(list: List<Int>?): String {
        return gson.toJson(list)
    }

    @TypeConverter
    fun fromJsonToListInt(json: String?): List<Int> {
        return if (json.isNullOrEmpty()) {
            emptyList()
        } else {
            val type = object : TypeToken<List<Int>>() {}.type
            gson.fromJson(json, type)
        }
    }
}