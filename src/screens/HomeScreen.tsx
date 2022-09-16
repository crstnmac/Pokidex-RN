import { FlashList, ListRenderItemInfo } from '@shopify/flash-list'
import { usePokemon, usePokemonByName } from 'api/hooks/usePokemon'
import layout from 'constants/layout'
import { NamedAPIResource } from 'pokenode-ts'
import React from 'react'
import { Text, View, Pressable } from 'react-native'
import { RootTabScreenProps } from '../types'
export default function HomeScreen({
  navigation,
}: RootTabScreenProps<'HomeScreen'>) {
  const { isLoading: pokimonLoading, data: pokemonData } = usePokemon()
  const { isLoading: loadingBulbasaur, data: pokiData } = usePokemonByName({
    name: 'bulbasaur',
  })

  if (!loadingBulbasaur) {
    console.log(pokiData?.sprites.back_default)
  }

  if (pokimonLoading) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    )
  }

  const { window } = layout

  function onClickPokimon({ name }) {
    navigation.navigate('Modal', {
      name: name as string,
    })
  }

  function Item({ item, index }: ListRenderItemInfo<NamedAPIResource>) {
    return (
      <Pressable
        className="bg-black mt-2 justify-center text-center rounded-xl mx-3"
        key={index}
        onPress={() => onClickPokimon({ name: item.name })}
      >
        <Text className="text-xl p-3 text-white font-space-medium">
          {item.name}
        </Text>
      </Pressable>
    )
  }

  return (
    <View className="flex-1 h-full w-full items-center justify-center">
      {/* <Image
        style={{
          width: 400,
          height: 400,
        }}
        source={{
          uri: pokiData?.sprites.other?.[
            'official-artwork'
          ].front_default?.toString(),
        }}
      /> */}
      <FlashList
        data={pokemonData?.results}
        estimatedListSize={{
          height: window.height,
          width: window.width,
        }}
        estimatedItemSize={1154}
        renderItem={Item}
      />
    </View>
  )
}
