// werback.config.development.js와 webpack.config.production.js에서 공통항목을 빼내
//common-paths.js 파일 생성
//output.path 경로 -> common-paths.js
const commonPaths = require('./common-paths');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

 // 어플리케이션이 시작될 때 이 속성들이 정의된다. 
const config = {
    entry: {
        vendor: ['semantic-ui-react'],
    },
    //번들 파일을 배포할 때 실행하는 코드
    output: {
        path: commonPaths.outputPath,
        publicPath: '/',
    },
    //로더 설정
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            {
                test:/\.s[ac]ss$/i,
                use:[
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ] 
            },
            {
                test: /\.(png|jpg)$/,
                use: ["file-loader","url-loader"]
            },
        ],
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor: {
                    chunks: 'initial',
                    test: 'vendor',
                    name: 'vendor',
                    enforce: true,
                },
            },
        },
    },
    plugins: [ // 번들 js 파일을 제공하기 위해 html을 정의한다.
        new HtmlWebpackPlugin({
            template: 'public/index.html', 
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            'window.jQuery': 'jquery',
            moment: 'moment',
        }),
    ],
};
module.exports = config;

// https://www.freecodecamp.org/news/an-intro-to-webpack-what-it-is-and-how-to-use-it-8304ecdc3c60/
