package com.bridgetonative.bridge

import android.content.Context
import android.util.Log
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod

class SampleModule(
    private val reactContext: ReactApplicationContext,
    private val appContext: Context
) : ReactContextBaseJavaModule() {

    @ReactMethod
    fun openMethod(value: String) {
        Log.i("openMethod", ("opened bridge $value"))
    }

    override fun getName(): String {
        return "SampleModule"
    }
}
