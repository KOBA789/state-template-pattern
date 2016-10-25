const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const env = process.env.NODE_ENV || 'development';

module.exports = {
  entry: {
    main: [
      './src/index.tsx',
    ],
    style: './src/style.scss',
  },
  output: {
    path: path.join(__dirname, 'public/'),
    filename: '[name].js',
    publicPath: '/',
  },

  resolve: {
    extensions: ['', '.tsx', '.ts', '.js'],
  },

  module: {
    loaders: [
      {
        test: /\.tsx?$/,
        loaders: ['awesome-typescript'],
      },
      {
        test: /\.woff2?$|\.ttf$|\.eot$|\.svg$/,
        loader: 'file',
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader!sass-loader'),
      },
    ],

    preLoaders: [],
  },
  plugins: [
    new ExtractTextPlugin('[name].css'),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(env),
    }),
  ]
};

switch (env) {
case 'production':
  require('./webpack-production.config.js');
  break;
case 'development':
default:
  require('./webpack-development.config.js');
  break;
}
