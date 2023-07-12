module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      'react-native-reanimated/plugin',
      [
        'babel-plugin-module-resolver',
        {
          alias: {
            '@types': './src/types',
            '@common': './src/common',
            '@pages': './src/pages',
            '@context': './src/context',
          },
        },
      ],
    ],
  };
};
