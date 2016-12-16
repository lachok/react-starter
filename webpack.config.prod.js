const webpack = require('webpack')

module.exports = (PATHS) => {
  return {
    output: {
      path: PATHS.build,
      filename  : '[name].[chunkhash:6].js'
    },
    plugins: [
      new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor',
        minChunks: module => /node_modules/.test(module.resource)
      }),
      new webpack.optimize.CommonsChunkPlugin({
          name: 'manifest'
      }),
      // removes a lot of debugging code in React
      new webpack.DefinePlugin({
        'process.env': {
          'NODE_ENV': JSON.stringify('production')
        }
      }),
      // keeps hashes consistent between compilations
      new webpack.optimize.OccurrenceOrderPlugin(),
      // minifies your code
      new webpack.optimize.UglifyJsPlugin({
        compressor: {
          warnings: false
        }
      })
    ]}
  }