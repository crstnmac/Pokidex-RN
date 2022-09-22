import React from 'react'
import { PokemonStat } from 'pokenode-ts'
import { View, Text } from 'react-native'
import Progress from 'components/atoms/Progress'

const Stats = ({ data }: { data: PokemonStat[] | undefined }) => {
  return (
    <>
      {data?.map((p, i) => {
        return (
          <View key={i}>
            <View className="flex-1 items-center flex-row justify-between">
              <Text className="font-space-semibold">
                {p?.stat.name.toLocaleUpperCase()}
              </Text>
              <Text className="text-xl font-space-semibold">
                {p?.base_stat}
              </Text>
            </View>
            <Progress
              progressDuration={1000}
              animated={true}
              progress={p?.base_stat}
              height={15}
              backgroundColor="#4a0072"
              range={100}
            />
          </View>
        )
      })}
    </>
  )
}

export default Stats
