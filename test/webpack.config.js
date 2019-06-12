const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const stats = {
    all: false,
    colors: true,
    maxModules: 0,
    hash: true,
    errors: true,
    warnings: true,
    assets: true,
    assetsSort: 'chunks',
};

const config = {
    devServer: {
        publicPath: '/',
        host: '0.0.0.0',
        port: 3000,
        historyApiFallback: true,
        stats: stats,
    },
    entry: path.join(__dirname, 'test.tsx'),
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'dist'),
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js'],
    },
    module: {
        rules: [{
            test: /\.(tsx|ts)$/,
            use: [{
                loader: 'ts-loader',
            }],
        }, {
            test: /\.css$/,
            include: [
                path.join(__dirname, '../node_modules'),
            ],
            use: [
                MiniCssExtractPlugin.loader,
                'css-loader',
            ],
        }],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'style.css',
        }),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'test.html'),
            filename: 'index.html',
        }),
        new webpack.WatchIgnorePlugin([
            /css\.d\.ts$/,
        ]),
    ],
};

module.exports = config;
