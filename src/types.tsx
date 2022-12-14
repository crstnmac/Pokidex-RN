import {
  CompositeScreenProps,
  NavigatorScreenParams,
  RouteProp,
} from '@react-navigation/native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'

export type RootStackParamList = {
  Root: NavigatorScreenParams<RootTabParamList> | undefined
  Modal: { name: string }
  NotFound: undefined
}

export type RootTabParamList = {
  HomeScreen: undefined
}

export type ModalScreenRouteProps = RouteProp<RootStackParamList, 'Modal'>

export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, Screen>

export type RootTabScreenProps<Screen extends keyof RootTabParamList> =
  CompositeScreenProps<
    NativeStackScreenProps<RootTabParamList, Screen>,
    NativeStackScreenProps<RootStackParamList>
  >
