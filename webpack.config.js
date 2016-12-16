const path = require('path')
const merge = require('webpack-merge')
const html = require('html-webpack-plugin')

const TARGET = process.env.npm_lifecycle_event

const PATHS = {
  app: path.join(__dirname, 'app'),
  build: path.join(__dirname, 'build')
}

const common = {
  entry: {
    app: PATHS.app
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  resolveLoader: {
    moduleExtensions: ['-loader']
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        enforce: 'pre',
        use: ['eslint'],
        include: PATHS.app
      },
      { 
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: ['babel?cacheDirectory']
      },
      {
        test: /\.less$/,
        include: PATHS.app,
        use: ['style', 'css', 'less']
      }
    ]
  },
  plugins: [
    new html({template: './index.html'})
  ]
}

if(TARGET === 'start' || !TARGET) {
  module.exports = merge(common, require('./webpack.config.dev.js')(PATHS))
}

if(TARGET === 'build') {
  module.exports = merge(common, require('./webpack.config.prod.js')(PATHS))
}