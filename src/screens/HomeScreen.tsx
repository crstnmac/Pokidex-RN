import React from 'react'
import { View, Text, Dimensions } from 'react-native'
import { RootTabScreenProps } from '../types'
import { usePokemon } from 'api/hooks/usePokemon'
import { FlashList } from '@shopify/flash-list'

export default function HomeScreen({
  navigation,
}: RootTabScreenProps<'HomeScreen'>) {
  const { isLoading: pokimonLoading, data: pokemonData } = usePokemon()

  if (pokimonLoading) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    )
  }

  return (
    <View className="flex-1 h-full w-full items-center justify-center">
      <FlashList
        data={pokemonData?.results}
        estimatedListSize={{
          height: Dimensions.get('window').height,
          width: Dimensions.get('window').width,
        }}
        estimatedItemSize={1154}
        renderItem={({ item }) => {
          return (
            <View className="bg-black mt-2 justify-center text-center rounded-xl mx-3">
              <Text className="text-xl p-3 text-white"> {item.name}</Text>
            </View>
          )
        }}
      />
    </View>
  )
}
