const { merge } = require('webpack-merge');
const baseConfig = require('./base.config');

module.exports = merge(baseConfig, {
  mode: 'production',
  output: {
    filename: '[name].[contenthash].js'
  },
  optimization: {
    moduleIds: 'deterministic',
    splitChunks: {
      maxSize: 40000,
      cacheGroups: {
        mainVendors: {
          test: /[\\/]node_modules[\\/]/,
          name: module =>
            `main.vendor.${module.context
              .match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1]
              .replace('@', '')}`,
          chunks: ({ name }) => name === 'main'
        }
      }
    }
  }
});
