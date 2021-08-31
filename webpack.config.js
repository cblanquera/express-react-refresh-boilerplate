const path = require('path')
const webpack = require('webpack')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')

const config = {
  mode: 'development',
  entry: {
    main: [
      'webpack-hot-middleware/client', 
      './client/index.js'
    ]
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'index.js'
  },
  resolve: {
    extensions: ['.js', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        include: [path.join(__dirname, 'client')], // only bundle files in this directory
        use: {
          loader: 'babel-loader', // cf. .babelrc.json in this folder and browser list in package.json
          options: {
            plugins: ['react-refresh/babel'],
          }
        }
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin,
    new ReactRefreshWebpackPlugin({
      overlay: {
        sockIntegration: 'whm'
      }
    })
  ],
  //don't add this on production
  cache: {
    // https://webpack.js.org/configuration/other-options/#cache
    type: 'filesystem',
    cacheDirectory: path.resolve(__dirname, '.tmp'),
    name: 'dev-react-cache'
  }
}

module.exports = config