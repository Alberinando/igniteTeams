module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@assets': './src/Assets',
          '@components': './src/Components',
          '@routes': './src/Routes',
          '@screens': './src/Screens',
          '@storage': './src/Storage',
          '@theme': './src/Theme',
          '@utils': './src/Utils',
        },
      },
    ],
  ],
};
