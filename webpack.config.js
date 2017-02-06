/* global __dirname */
module.exports = {
  entry: ['babel-polyfill', __dirname + '/src/assets/scripts/src/index.js'],
  output: {
    path: __dirname + '/serve/assets/scripts/dist',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }
    ]
  },
  externals: {
    jquery: 'jQuery'
  }
}
