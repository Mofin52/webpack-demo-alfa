const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: path.join(__dirname, 'src', 'index.tsx'),
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    devServer: {
        port: 9000,
        devMiddleware: {
            index: 'index.html',
            writeToDisk: true,
        }
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.jpe?g$/i,
                type: "asset/resource",
            },
            {
                test: /\.(tsx?)$/,
                exclude: /node_modules/,
                use: 'ts-loader',
            }
        ],
    },
    output: {
        filename: 'bundle.[contenthash].js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: "",
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'src', 'index.html')
        })
    ]
}
