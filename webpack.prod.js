const merge = require('webpack-merge');
const common = require('./webpack.config.js');
const TerserJSPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const { BaseHrefWebpackPlugin } = require('base-href-webpack-plugin');
const path = require('path');
const { resolve } = require('path')
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
    mode: 'production',
    resolve: {
        extensions: [".tsx",".ts",".js",".json"],
        alias: {
            utils: resolve(__dirname, 'src', 'utils'),
            model: resolve(__dirname, 'src', 'model')
        },
        mainFiles: ['index']
    },
    output: {
        filename: 'StoryBook.js',
        path: path.resolve(__dirname,'dist'),
        libraryTarget: 'window',
        library: 'StoryBoard',
        umdNamedDefine: true
    },
    module: {
        rules: rules
    },
    externals: {
        "ait-bpd-common": 'siebel/custom/AITScripts/AIT-BPD-Common/AIT-BPD-Common',
        "ait-bpd-common-core": 'siebel/custom/AITScripts/AIT-BPD-Common/AIT-BPD-Common-core'
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({ template: path.join(__dirname,'src','index.html') }),
    ],
    optimization: {
        minimize: true,
        minimizer: [new TerserJSPlugin({
            extractComments: false,
            terserOptions: {
	            keep_classnames: undefined,
                keep_fnames: false,
                mangle: true,
	        }
        })],
    }
});