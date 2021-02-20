const path = require('path');
const { merge } = require('webpack-merge');
const baseConfig = require('./base.config.js');

module.exports = merge(baseConfig, {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  output: {
    filename: '[name].js'
  },
  devServer: {
    host: '0.0.0.0',
    port: 8100,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }
        ],
        include: [
          path.resolve(__dirname, '../node_modules/ansi-styles'),
          path.resolve(__dirname, '../node_modules/chalk'),
          path.resolve(__dirname, '../node_modules/react-dev-utils')
        ]
      }
    ]
  }
});
