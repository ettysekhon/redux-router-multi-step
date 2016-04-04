const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const postcssImport = require('postcss-import');
const path = require('path');
const DEV = process.env.NODE_ENV === 'development';
const PORT = process.env.PORT;

const config = {
  devtool: DEV ? 'source-map' : 'cheap-module-source-map',
  debug: DEV,
  entry: {
    bundle: [
      './app/index'
    ]
  },
  output: {
    path: path.resolve('./dist'),
    filename: '[name].[hash].js'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
      'process.env.PORT': PORT
    }),
    new ExtractTextPlugin('[name].[hash].css', { allChunks: true }),
    new HtmlWebpackPlugin({
      template: './index.html',
      inject: true
    })
  ],
  postcss: (wp) => {
    return [
      postcssImport({
        addDependencyTo: wp
      }),
      require('postcss-mixins'),
      require('postcss-nested'),
      require('postcss-simple-vars')(),
      require('autoprefixer')({
        browsers: ['last 2 versions', 'IE > 8']
      }),
      require('postcss-reporter')({
        clearMessages: true
      })
    ];
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel'],
      exclude: /node_modules/
    }, {
      test: /\.json$/,
      loaders: ['json-loader'],
      include: path.join(__dirname, 'src')
    }, {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract('style-loader', 'css-loader!postcss-loader')
    }, {
      test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
      loader: 'url-loader?limit=10000&name=fonts/[name].[ext]'
    }]
  }
};

if (DEV) {
  config.entry.bundle.push('eventsource-polyfill');
  config.entry.bundle.push('webpack-hot-middleware/client');
  config.plugins.push(new webpack.HotModuleReplacementPlugin());
  config.plugins.push(new webpack.NoErrorsPlugin());
} else {
  config.plugins.push(
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        unused: true,
        dead_code: true
      }
    })
  );
}

module.exports = config;
