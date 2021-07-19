commonPaths = require('./common-paths');
const webpack = require('webpack'); 
const axios = require('axios');
const port = process.env.PORT || 3000;
const proxy = require('http-proxy-middleware');
  
 const config = { 
  mode: 'development',  
  entry: {
    app:[`babel-polyfill`,`${commonPaths.appEntry}/index.js`]
   // app: `${commonPaths.appEntry}/index.js`
  },
 
  output: {
    filename: '[name].[hash].js'
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.css$/,
        use:[ 'style-loader','css-loader'] 
      },
      {
        test:/\.s[ac]css$/,
        use: [ 'postcss-loader', 'sass-loader'], 
      },
      {
          test: /\.(png|jpg)$/,
          use: ["file-loader","url-loader"]
      },
      // {
      //   test: /\.(png|jpg|gif)$/,
      //   use: ['url-loader']
      // },
    ]
  },
  node :{
    fs : "empty"
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(), 
    new webpack.DefinePlugin({
      API_URL: JSON.stringify("http://localhost:9010"),
      PAGE_URL: JSON.stringify("http://localhost")
    }),
  ],
  devServer: {
    host: 'localhost',
    port: port,
    historyApiFallback: true,
    hot: true,
    open: true,
    proxy:{
        '/leave':{
            target: 'http://localhost:9010',
            changeOrigin:true,
            pathRewrite:{
                '^/leave':''
            }
        }
    }
  }  
};
module.exports = config;
