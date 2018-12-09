/**
 * Created by zhouzhongyu on 2018/11/29.
 */
let HtmlWebpackPlugin = require("html-webpack-plugin");

const path = require('path');
const root = __dirname;

let _resolve = (p) => {
    return path.join(__dirname, p);
};

module.exports = {
    // 入口文件
    entry:{
        "main": '@/main.js'
    },

    // 出口文件
    output: {
        filename: 'app.js',
        path: _resolve('/dist')
    },

    resolve: {
        alias: {
            '@': _resolve("/src")
        },
    },

    // loaders
    module: {
        rules: [
            {test: /\.jsx?$/, use: ['babel-loader'], exclude: /node_modules/},
            {test: /\.css?$/, use: ['style-loader','css-loader']},
            {test: /\.less?$/, use: ['style-loader','css-loader','less-loader']},
            {test: /\.svg?$/, use: ['file-loader']}
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            title: '去钓鱼吧',
            template: _resolve('/src/index.html')
        })
    ],
    devServer: {
        contentBase: _resolve('/dist'),
        publicPath: _resolve('/src'),
        port: 8080,
        historyApiFallback: true
    }
};