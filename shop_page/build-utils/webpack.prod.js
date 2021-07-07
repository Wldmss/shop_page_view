const commonPaths = require('./common-paths');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const config = {
  mode: 'production',
  entry: {
    app:[`babel-polyfill`,`${commonPaths.appEntry}/index.js`]
  },
  output: {
    filename: 'static/[name].[hash].js'
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.css$/,
        use:[ 'style-loader','css-loader'] 
      },
      {
        test:/\.s[ac]css$/,
        use: [ 'postcss-loader', 'sass-loader'], 
      }
    ] 
  },
  node :{
    fs : "empty"
  },
  plugins: [
    new ExtractTextPlugin({
      filename: 'styles/styles.[hash].css',
      allChunks: true
    }),
    new webpack.DefinePlugin({
      API_URL: JSON.stringify("http://13.125.49.215:9010"),
      PAGE_URL: JSON.stringify("http://13.125.49.215")
    })
  ]
};
module.exports = config; 