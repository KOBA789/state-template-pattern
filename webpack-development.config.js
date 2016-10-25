const config = require('./webpack.config');
const webpack = require('webpack');

config.entry.main = [
  'webpack-dev-server/client?http://0.0.0.0:3000',
  'webpack/hot/only-dev-server',
].concat(config.entry.main);

config.devtool = 'eval-cheap-module-source-map';

config.module.loaders[0].loaders = [
  'react-hot',
].concat(config.module.loaders[0].loaders);

config.module.preLoaders = config.module.preLoaders.concat([
  { test: /\.js$/, loader: 'source-map-loader' },
]);

config.plugins = [
  new webpack.HotModuleReplacementPlugin(),
].concat(config.plugins);

module.exports = config;
