const path = require('path');
      express = require('express');

module.exports = {
  app() {
    const app = express();
          indexPath = path.join(__dirname, '/../index.html');
          publicPath = express.static(path.join(__dirname, '../public'));

    app.use('/public', publicPath);
    app.get('/', function (_, res) { res.sendFile(indexPath) });

    return app;
  }
}
