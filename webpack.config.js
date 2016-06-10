const path = require('path')
const merge = require('webpack-merge')


const TARGET = process.env.npm_lifecycle_event

const PATHS = {
  app: path.join(__dirname, 'app'),
  build: path.join(__dirname, 'build')
}

const common = {
  entry: [
    'webpack-dev-server/client?http://0.0.0.0:3000', // WebpackDevServer host and port
    'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
    PATHS.app
  ],
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  output: {
    path: PATHS.build,
    filename: 'bundle.js'
  },
  module: {
    preLoaders: [
      {
        test: /\.jsx?$/,
        loaders: ['eslint'],
        include: PATHS.app
      }
    ],
    loaders: [
      { 
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ['react-hot', 'babel?cacheDirectory']
      },
      {
        test: /\.less$/,
        loaders: ['style', 'css', 'less'],
        include: PATHS.app
      }
    ]
  }
}

if(TARGET === 'start' || !TARGET) {
  module.exports = merge(common, require('./webpack.config.dev.js')(PATHS))
}

if(TARGET === 'build') {
  module.exports = merge(common, require('./webpack.config.prod.js')(PATHS))
}