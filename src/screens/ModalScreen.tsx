import Button from 'components/atoms/Button'
import React from 'react'
import { View, Text, Image } from 'react-native'
import { usePokemonByName } from 'api/hooks/usePokemon'
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native'

export default function ModalScreen() {
  const navigation = useNavigation()
  const route: RouteProp<{ params: { name: string } }, 'params'> = useRoute()

  const { data: poke, isLoading: pokeLoading } = usePokemonByName({
    name: route.params.name,
  })
  const imgUri =
    poke?.sprites.other?.['official-artwork'].front_default?.toString()

  if (pokeLoading) {
    return (
      <View className="flex-1 justify-center items-center">
        <Text className="text-2xl font-space-regular">Loading..</Text>
      </View>
    )
  }

  return (
    <View className="flex-1 justify-center items-center">
      <Button text="Back" onPress={() => navigation.goBack()} />
      <Text className="text-2xl font-space-regular"> {poke?.name} </Text>
      <Image
        style={{
          width: 400,
          height: 400,
        }}
        source={{
          uri: imgUri,
        }}
      />
      <Text className="text-2xl font-space-semibold">
        {poke?.base_experience}
      </Text>
    </View>
  )
}
