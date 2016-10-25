const config = require('./webpack.config');
const webpack = require('webpack');

config.plugins = config.plugins.concat([
  new webpack.optimize.OccurrenceOrderPlugin(),
]);

module.exports = config;
