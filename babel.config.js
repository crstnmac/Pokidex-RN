/* eslint-disable @typescript-eslint/no-unsafe-member-access */
module.exports = function (api) {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    plugins: ['nativewind/babel', 'react-native-reanimated/plugin'],
  }
}
