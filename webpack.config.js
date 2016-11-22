const webpack = require('webpack');
module.exports = {
  entry: './src/jsx/index.jsx',
  output: {
    filename: './dist/output.js'
  },
  plugins: [new webpack.optimize.UglifyJsPlugin()],
  devtool: 'inline-source-map',
  module: {
    loaders: [
      {
        test: /\.jsx$/,
        loader: 'babel-loader'
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
}