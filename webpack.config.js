const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = (env,arg) => {
    const mode = arg.mode;
    const isProduction = mode === 'production' ? true : false;

    const rulesForStyles = {
        test: /\.css$/i,
        include: path.resolve(__dirname,'src','css'),
        use: ['style-loader','css-loader','postcss-loader'],
    }

    const rulesForTypeScript = {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/
    }

    const rules = [
        rulesForStyles,
        rulesForTypeScript
    ]

    return {
        entry: path.join(__dirname,'src','index.ts'),
        module: {
            rules: rules
        },
        resolve: {
            extensions: [".tsx",".ts",".js"]
        },
        output: {
            filename: isProduction ? '[name].[contenthash].js' : '[name].js',
            path: path.resolve(__dirname,'dist'),
        },
        devServer: {
            static: {
                directory: path.resolve(__dirname,'dict')
            },
            compress: true,
            hot: true,
            historyApiFallback: true,
            port: 8000,
            open: false
        },
        plugins: [
            new HtmlWebpackPlugin({ template: path.join(__dirname,'src','index.html') })
        ]
    }
} 

