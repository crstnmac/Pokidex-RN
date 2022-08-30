import { StatusBar } from 'expo-status-bar'
import { useColorScheme } from 'nativewind'
import React from 'react'
import { gestureHandlerRootHOC } from 'react-native-gesture-handler'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import useCachedResources from './hooks/useCachedResources'
import Navigation from './navigation'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      refetchOnReconnect: false,
      retry: false,
      staleTime: 5 * 60 * 1000,
    },
  },
})

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
      <QueryClientProvider client={queryClient}>
        <AppRoot />
      </QueryClientProvider>
    </SafeAreaProvider>
  )
}

export default gestureHandlerRootHOC(ProviderWrapper)
