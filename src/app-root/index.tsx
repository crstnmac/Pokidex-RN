import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { Text, View } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import useCachedResources from './hooks/useCachedResources'

const AppRoot: React.FC = () => {
  const isLoadingComplete = useCachedResources()

  /* Checking if the app is loading and if it is not loading it will return null. If it is loading it
  will return the SafeAreaProvider. */
  if (!isLoadingComplete) {
    return null
  } else {
    return (
      <SafeAreaProvider>
        <View className="flex-1 bg-white items-center justify-center">
          <Text className="text-3xl font-space-bold">POKIDEX</Text>
          <StatusBar style="auto" />
        </View>
      </SafeAreaProvider>
    )
  }
}

export default AppRoot
