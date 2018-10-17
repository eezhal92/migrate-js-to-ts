const path = require('path')

module.exports = {
  entry: path.resolve(__dirname, 'src/index.js'),
  output: {
    path: path.resolve(__dirname, 'public/dist'),
    publicPath: path.resolve(__dirname, '/dist'),
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',
      }
    ],
  },
  resolve: {
    extensions: ['.js'],
  },
  devServer: {
    port: 3000,
    contentBase: [
      path.resolve(__dirname, 'dist'),
      path.resolve(__dirname, 'public')
    ]
  }
}
