const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const root = path.resolve(__dirname, '../');

module.exports = {
  entry: path.resolve(root, 'src/index.js'),
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
        },
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
        },
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
        },
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Welcome',
      template: './index.html',
      favicon: path.resolve(root, 'src/assets/favicon.ico'),
    })
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    alias: {
      'src': path.resolve(root, 'src'),
      'util': path.resolve(root, 'src/util'),
      'assets': path.resolve(root, 'src/assets'),
      'components': path.resolve(root, 'src/components')
    }
  }
};