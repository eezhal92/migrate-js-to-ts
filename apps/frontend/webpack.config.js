const path = require('path')

module.exports = {
  entry: path.resolve(__dirname, 'src/index.ts'),
  output: {
    path: path.resolve(__dirname, 'public/dist'),
    publicPath: path.resolve(__dirname, '/dist'),
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'babel-loader',
      },
      {
        test: /\.js$/,
        loader: 'source-map-loader',
      }
    ],
  },
  resolve: {
    extensions: ['.js', '.ts'],
  },
  devServer: {
    port: 3000,
    contentBase: [
      path.resolve(__dirname, 'dist'),
      path.resolve(__dirname, 'public')
    ]
  }
}
