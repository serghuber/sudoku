const Server = require('./src/server.js');
      port = (process.env.PORT || 8080);
      app = Server.app();

if (process.env.NODE_ENV !== 'production') {
  const webpack = require('webpack');
        webpackDevMiddleware = require('webpack-dev-middleware');
        webpackHotMiddleware = require('webpack-hot-middleware');
        config = require('./webpack.dev.config.js');
        compiler = webpack(config);

  app.use(webpackHotMiddleware(compiler));
  app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
  }));
}

app.listen(port);

console.log(`Listening at http://localhost:${port}`);
