const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config');

const PORT = Number(process.env.PORT || 3000);
const HOST = process.env.LISTEN_HOST || '127.0.0.1';

const server = new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  contentBase: config.output.path,
  hot: true,
  historyApiFallback: false,
  stats: { colors: true }
});

server.listen(PORT, HOST, (err, result) => {
  if (err) {
    console.error(err);
    return;
  }

  console.log(`Listening at http://${HOST}:${PORT}`);
});
