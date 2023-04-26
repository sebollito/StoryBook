const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');

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
            {
                loader: 'sass-loader',
                options: {
                    implementation: require('sass')
                }
            },
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

    const rules = [
        rulesForStyles,
        rulesForTypeScript,
        rulesForJavascript
    ]

    return {
        entry: path.join(__dirname,'src','index.ts'),
        module: {
            rules: rules
        },
        externals: {
            //"ait-dav-common": path.resolve(__dirname,'node_modules','@types','ait-dav-common')
            "ait-dav-common": 'siebel/custom/Scripts/AIT-DAV-Common/AIT-DAV-Common',
        },
        resolve: {
            extensions: [".tsx",".ts",".js",".jsx",".json"],
        },
        output: {
            filename: isProduction ? '[name].[contenthash].js' : '[name].js',
            path: path.resolve(__dirname,'dist')
        },
        devServer: {
            static: {
                directory: path.resolve(__dirname,'public')
            },
            compress: true,
            hot: true,
            historyApiFallback: true,
            port: 8000,
            open: false
        },
        plugins: [
            new HtmlWebpackPlugin({ template: path.join(__dirname,'src','index.html') }),
            new webpack.DefinePlugin({
                'process.env.ENVIRONMENT': JSON.stringify(process.env.ENVIRONMENT)
            })
        ]
    }
} 

