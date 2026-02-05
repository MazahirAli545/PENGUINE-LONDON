const path = require('path');
const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('@react-native/metro-config').MetroConfig}
 */
const defaultConfig = getDefaultConfig(__dirname);

// Force react-native-svg to use compiled lib (main) instead of source (react-native).
// Avoids "Unable to resolve ./lib/extract/types" when Metro uses src/index.ts.
const reactNativeSvgLib = path.resolve(
  __dirname,
  'node_modules/react-native-svg/lib/commonjs/index.js',
);

const config = {
  transformer: {
    babelTransformerPath: require.resolve('react-native-svg-transformer'),
  },
  resolver: {
    ...defaultConfig.resolver,
    assetExts: defaultConfig.resolver.assetExts.filter(ext => ext !== 'svg'),
    sourceExts: [...defaultConfig.resolver.sourceExts, 'svg'],
    resolveRequest: (context, moduleName, platform) => {
      if (moduleName === 'react-native-svg') {
        return { type: 'sourceFile', filePath: reactNativeSvgLib };
      }
      return context.resolveRequest(context, moduleName, platform);
    },
  },
};

module.exports = mergeConfig(defaultConfig, config);
