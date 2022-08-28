import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, View } from "react-native";

export default function App() {
  return (
    <View className="flex-1 bg-white items-center justify-center">
      <Text className="text-xl">POKIDEX</Text>
      <StatusBar style="auto" />
    </View>
  );
}
