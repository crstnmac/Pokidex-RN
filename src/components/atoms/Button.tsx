import { Pressable, Text } from 'react-native'

interface ButtonProps {
  text: string
}

export default function Button({ text }: ButtonProps) {
  return (
    <Pressable
      className="bg-blue-500 px-3 py-1 rounded-xl border"
      onPress={() => console.log('touched')}
    >
      <Text className="text-xl text-white">{text}</Text>
    </Pressable>
  )
}
