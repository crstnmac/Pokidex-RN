import { StatusBar } from 'expo-status-bar'
import { useColorScheme } from 'nativewind'
import React from 'react'
import { View } from 'react-native'
import { gestureHandlerRootHOC } from 'react-native-gesture-handler'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import useCachedResources from './hooks/useCachedResources'
import Navigation from './navigation'

const AppRoot: React.FC = () => {
  const isLoadingComplete = useCachedResources()
  const { colorScheme } = useColorScheme()

  /* Checking if the app is loading and if it is not loading it will return null. If it is loading it
  will return the SafeAreaProvider. */
  if (!isLoadingComplete) {
    return null
  } else {
    return (
      <>
        <Navigation colorScheme={colorScheme} />
        <StatusBar style="auto" />
      </>
    )
  }
}

const ProviderWrapper: React.FC = () => {
  return (
    <SafeAreaProvider>
      <AppRoot />
    </SafeAreaProvider>
  )
}

export default gestureHandlerRootHOC(ProviderWrapper)
