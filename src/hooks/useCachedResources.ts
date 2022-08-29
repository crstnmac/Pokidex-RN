import {
  SpaceGrotesk_300Light,
  SpaceGrotesk_400Regular,
  SpaceGrotesk_500Medium,
  SpaceGrotesk_600SemiBold,
  SpaceGrotesk_700Bold,
} from '@expo-google-fonts/space-grotesk'
import { FontAwesome } from '@expo/vector-icons'
import * as Font from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'
import { useEffect, useState } from 'react'

export default function useCachedResources() {
  const [isLoadingComplete, setLoadingComplete] = useState(false)

  /**
   * Loads resources and data, and then hides the splash screen.
   */
  useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        // eslint-disable-next-line no-void
        SplashScreen.preventAutoHideAsync()
        //load fonts
        await Font.loadAsync({
          ...FontAwesome.font,
          'space-light': SpaceGrotesk_300Light,
          'space-regular': SpaceGrotesk_400Regular,
          'space-medium': SpaceGrotesk_500Medium,
          'space-semibold': SpaceGrotesk_600SemiBold,
          'space-bold': SpaceGrotesk_700Bold,
        })
      } catch (e) {
        console.warn(e)
      } finally {
        setLoadingComplete(true)
        // eslint-disable-next-line no-void
        SplashScreen.hideAsync()
      }
    }

    // eslint-disable-next-line no-void
    loadResourcesAndDataAsync()
  }, [])

  return isLoadingComplete
}
