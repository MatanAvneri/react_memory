const path = require('path');

module.exports = {
  entry: './main.js',
  output: {
    path: path.join(__dirname),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  }
};
