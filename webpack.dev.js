/**
 * Created by zhouzhongyu on 2018/11/29.
 */
let HtmlWebpackPlugin = require("html-webpack-plugin");

const path = require('path');
const root = __dirname;

let _resolve = (p) => {
    return path.resolve(__dirname, p);
};

module.exports = {
    // 入口文件
    entry: _resolve('/main.js'),

    // 出口文件
    output: {
        filename: 'app.js',
        path: _resolve('/dist')
    },

    // loaders
    module: {
        rules: [
            {test: /\.jsx?$/, use: ['babel-loader'], exclude: /node_modules/}
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            title: '去钓鱼吧',
            template: _resolve('template.html')
        })
    ],
    devServer: {
        contentBase: path.resolve(root, 'dist'),
        publicPath: '/',
        port: 8080,
        historyApiFallback: true
    }
};