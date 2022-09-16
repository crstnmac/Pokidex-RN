import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { ColorSchemeName } from 'react-native'
import ModalScreen from 'screens/ModalScreen'
import HomeScreen from '../screens/HomeScreen'
import NotFoundScreen from '../screens/NotFoundScreen'
import { RootStackParamList, RootTabParamList } from '../types'

export default function Navigation({
  colorScheme,
}: {
  colorScheme: ColorSchemeName
}) {
  return (
    <NavigationContainer
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
    >
      <RootNavigator />
    </NavigationContainer>
  )
}

const Stack = createNativeStackNavigator<RootStackParamList>()

const ChildStack = createNativeStackNavigator<RootTabParamList>()

function Home() {
  return (
    <ChildStack.Navigator>
      <ChildStack.Screen
        name="HomeScreen"
        options={{
          headerShown: true,
        }}
        component={HomeScreen}
      />
    </ChildStack.Navigator>
  )
}

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Group>
        <Stack.Screen
          name="Root"
          options={{
            headerShown: false,
          }}
          component={Home}
        />
        <Stack.Screen
          name="NotFound"
          component={NotFoundScreen}
          options={{ title: 'Oops!' }}
        ></Stack.Screen>
      </Stack.Group>
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen
          name="Modal"
          component={ModalScreen}
          initialParams={{ name: 'bulbasaur' }}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Group>
    </Stack.Navigator>
  )
}
