const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    //mode: 'production',
    //mode: 'development',
    entry: './src/CodeMirror-Package.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'CodeMirror-Package.min.js',
        libraryTarget: 'umd',
    },
    devServer: {
        contentBase: "./dist", //本地服务器所加载的页面所在的目录
        historyApiFallback: true, //不跳转
        inline: true //实时刷新
    },
    module: {
        rules: [
            {
                test: /\.js$/,//
                exclude: /node_modules/,//  不包括node_modules文件夹
                use: {
                    loader: "babel-loader"//  插件
                }
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: '../'
                        }
                    },
                    "css-loader"
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        }),
        new HtmlWebpackPlugin({
            template: path.join(__dirname) + '/src/index.html' ,
        })
    ],
};