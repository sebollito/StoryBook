const merge = require('webpack-merge');
const common = require('./webpack.config.js');
const Dotenv = require('dotenv-webpack');
const { resolve } = require('path')
const CopyPlugin = require('copy-webpack-plugin')
const { BaseHrefWebpackPlugin } = require('base-href-webpack-plugin');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');


const rulesForStyles = {
    test: /\.(sa|sc|c)ss$/i,
    include: path.resolve(__dirname,'src','css'),
    use: [
        'style-loader',
        'css-loader',
        'postcss-loader',
    ],
}

const rulesForTypeScript = {
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/
}

const rulesForSvg = {
    test: /\.(png|svg|jpg|gif)$/,
    loader: 'file-loader',
    options: {
        publicPath: `/siebel/scripts/siebel/custom/Scripts/StoryBoard`,
        outputPath: '/assets',
        name: '[folder]/[name].[ext]'
    },
}

const rules = [
    rulesForStyles,
    rulesForTypeScript,
    rulesForSvg
];

module.exports = merge(common, {
    mode: 'development',
    plugins: [
        new Dotenv({
            path: './envdebug.env'
        }),
        //new CopyPlugin([{
        //    from: 'index.html'
        //}]),
    ],
    resolve: {
        extensions: [".js",".tsx",".ts",".json","..."],
        alias: {
            utils: resolve(__dirname, 'src', 'utils'),
            model: resolve(__dirname, 'src', 'model')
        },
        mainFiles: ['index']
    },
    module: {
        rules: rules
    },
    devServer: {
        contentBase: resolve(__dirname, 'build'),
        port: 9000
    }
});