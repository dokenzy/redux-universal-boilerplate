var _ = require('lodash');
var webpack = require('webpack');
var config = require('./config');

config.entry.push(
  'webpack/hot/poll?1000'
);

config.module.loaders.unshift({
  test: /\.js$/,
  loader: 'react-hot',
  exclude: /node_modules/
});

module.exports = _.mergeWith(config, {
  cache: true,
  debug: true,
  watch: true,
  output: {
    hotUpdateMainFilename: "update/[hash]/update.json",
    hotUpdateChunkFilename: "update/[hash]/[id].update.js"
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
}, function(objValue, srcValue) {
  if (_.isArray(objValue)) {
    return objValue.concat(srcValue);
  }
});
