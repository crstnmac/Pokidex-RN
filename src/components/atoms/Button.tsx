import { Pressable, Text } from 'react-native'

interface ButtonProps {
  text: string
  onPress: () => void
}

export default function Button({ text, onPress }: ButtonProps) {
  return (
    <Pressable
      className="bg-blue-500 px-3 py-1 rounded-xl border"
      onPress={() => onPress()}
    >
      <Text className="text-xl text-white">{text}</Text>
    </Pressable>
  )
}
