module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      'nativewind/babel',
      'react-native-reanimated/plugin',
      [
        'babel-plugin-module-resolver',
        {
          alias: {
            '@types': './src/types',
            '@common': './src/common',
            '@pages': './src/pages',
            '@context': './src/context',
            '@data': './src/data',
            '@hooks': './src/hooks',
          },
        },
      ],
    ],
  };
};
