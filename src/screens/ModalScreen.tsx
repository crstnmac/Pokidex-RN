import Button from 'components/atoms/Button'
import React from 'react'
import { View, Text, Image } from 'react-native'
import { usePokemonByName } from 'api/hooks/usePokemon'
import { useNavigation, useRoute } from '@react-navigation/native'
import { ModalScreenRouteProps } from 'types'
import Stats from 'components/molecules/Stats'

export default function ModalScreen() {
  const navigation = useNavigation()
  const route = useRoute<ModalScreenRouteProps>()

  // const [index, setIndex] = React.useState(0)

  // React.useEffect(() => {
  //   const interval = setInterval(() => {
  //     setIndex((index + 100000) % (100 + 1))
  //   }, 1000)

  //   return () => {
  //     clearInterval(interval)
  //   }
  // }, [index])

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
    <View className="flex-1 justify-center items-center p-4">
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

      <View className="w-full">
        <Stats data={poke?.stats} />
      </View>
    </View>
  )
}
