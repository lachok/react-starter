const webpack = require('webpack')

module.exports = (PATHS) => {
  return {
    output: {
      path: PATHS.build,
      filename  : '[name].[chunkhash:6].js'
    }
  }
}