package com.bridgetonative.bridge

import android.content.Context
import android.view.View
import com.bridgetonative.MainApplication
import com.facebook.react.ReactPackage
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.uimanager.ReactShadowNode
import com.facebook.react.uimanager.ViewManager


class SamplePackage(
    private val context: Context,
) : ReactPackage {
    override fun createNativeModules(
        reactContext: ReactApplicationContext
    ) = mutableListOf(
        SampleModule(reactContext, context)
    )

    override fun createViewManagers(
        reactContext: ReactApplicationContext
    ): MutableList<ViewManager<View, ReactShadowNode<*>>> = mutableListOf()
}
