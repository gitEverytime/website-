var path = require('path')
var webpack = require('webpack')
var config = require('../config')
var entry = require('./entry.js')

var assetsPath = function (_path) {
    var assetsSubDirectory = process.env.NODE_ENV === 'production'
        ? config.build.assetsSubDirectory
        : config.dev.assetsSubDirectory
    return path.posix.join(assetsSubDirectory, _path)
}

module.exports = {
  entry: entry, // 入口
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '../dist')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: /node_modules/,
        include: path.resolve(__dirname, "../static"),
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        include: path.resolve(__dirname, "../src"),
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env'],
            // name: assetsPath('js/[name].[hash:24].js'),
            plugins: [
              'transform-runtime',
              "transform-es3-property-literals",
              "transform-es3-member-expression-literals"
            ]
          }
        }
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              name: assetsPath('img/[name].[hash:24].[ext]')
            }
          }
        ]
      }
    ]
  }
}

