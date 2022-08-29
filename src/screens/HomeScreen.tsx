import React from 'react'
import { View, Text } from 'react-native'
import { RootTabScreenProps } from '../types'

export default function HomeScreen({
  navigation,
}: RootTabScreenProps<'HomeScreen'>) {
  return (
    <View className="flex-1 items-center justify-center">
      <Text className="text-2xl font-space-bold"> Hello </Text>
    </View>
  )
}
