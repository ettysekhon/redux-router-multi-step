/* eslint no-console:0 */
import path from 'path';
import express from 'express';
import webpack from 'webpack';
import api from './api.routes';
import config from './webpack.config';

const port = process.env.PORT;
const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true
}));

app.use(require('webpack-hot-middleware')(compiler));

app.use('/api', api);

app.use(express.static(path.join(__dirname, 'dist')));

app.listen(port, (error) => {
  if (error) {
    console.error(error);
  } else {
    console.info(`==> 🌎 Open up http://localhost:${port}/ in your browser.`);
  }
});
