import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import useCachedResources from './hooks/useCachedResources'
import { Text, View } from 'react-native'

const AppRoot: React.FC = () => {
  const isLoadingComplete = useCachedResources()

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
