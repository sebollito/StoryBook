const path = require('path');
const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const ASSET_PATH = process.env.ASSET_PATH || '/';

module.exports = (env,arg) => {
    const mode = arg.mode;
    const isProduction = mode === 'production' ? true : false;


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

    const rulesForJavascript = {
        test: /\.js$/,
        use: 'babel-loader',
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
        rulesForJavascript,
        rulesForSvg
    ]

    return {
        entry: path.join(__dirname,'src','index.ts'),
        output: {
            filename: 'StoryBook.js',
            path: path.resolve(__dirname,'dist'),
        },
        devServer: {
            compress: true,
            historyApiFallback: true,
            static: {
                directory: path.join(__dirname,'public')
            },
            port: 8000,
            open: false
        },
        resolve: {
            extensions: [".tsx",".ts",".js",".json"],
            alias: {
                utils: resolve(__dirname, 'src', 'utils'),
                model: resolve(__dirname, 'src', 'model')
            },
            mainFiles: ['index']
        },
        module: {
            rules: rules
        },
        plugins: [
            new CleanWebpackPlugin(),
            new HtmlWebpackPlugin({ template: path.join(__dirname,'src','index.html') }),
            new webpack.DefinePlugin({
                'process.env.ENVIRONMENT': JSON.stringify(process.env.ENVIRONMENT)
            })
        ]
    }
} 

