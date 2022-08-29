import 'react-native'

import React, { ReactElement } from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'

export const createTestElement = (child: ReactElement): ReactElement => (
  <SafeAreaProvider>{child}</SafeAreaProvider>
)
