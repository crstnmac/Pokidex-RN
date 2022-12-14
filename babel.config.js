/* eslint-disable @typescript-eslint/no-unsafe-member-access */
module.exports = function (api) {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],

    plugins: [
      'nativewind/babel',
      'react-native-reanimated/plugin',
      [
        'module-resolver',
        {
          root: ['./'],
          alias: {
            api: './src/api',
            assets: './assets',
            components: './src/components',
            constants: './src/constants',
            hooks: './src/hooks',
            navigation: './src/navigation',
            screens: './src/screens',
          },
        },
      ],
    ],
  }
}
