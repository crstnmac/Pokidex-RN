jest.mock('@react-navigation/stack', () => ({
  // @ts-ignore
  ...jest.requireActual('@react-navigation/stack'),
  useHeaderHeight: () => 12,
}))

global.__reanimatedWorkletInit = jest.fn()
jest.mock('react-native/Libraries/EventEmitter/NativeEventEmitter')

jest.mock('react-native-reanimated', () =>
  require('react-native-reanimated/mock')
)

if (!global.Window) {
  Object.defineProperty(global, 'Window', {
    value: window.constructor,
    writable: true,
    enumerable: true,
    configurable: true,
  })
}
