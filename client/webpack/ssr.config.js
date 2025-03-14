const { resolve } = require('path');
const { merge } = require('webpack-merge');
const nodeExternals = require('webpack-node-externals');
const baseConfig = require('./base.config');

module.exports = merge(baseConfig, {
  entry: './source/app.tsx',
  externals: [nodeExternals()],
  mode: 'production',
  output: {
    filename: 'app.js',
    path: resolve(__dirname, '..', '..', 'server', 'ssr'),
    libraryTarget: 'umd',
  },
  target: 'node',
});
