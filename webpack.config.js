const path = require('path');
const fs = require('fs');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

const isDev = process.env.NODE_ENV === 'development';

module.exports = {
    mode: isDev,
    entry: {
        main: [
            '@babel/polyfill',
            path.resolve(__dirname, 'src/index.js')
        ],
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    },
    devServer: {
        port: 3000,
        hot: isDev,
        historyApiFallback: true
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: path.resolve(__dirname, 'public/index.html'),
        }),
        new CleanWebpackPlugin(),
        new MiniCSSExtractPlugin({
            filename: 'style.css',
            path: path.resolve(__dirname, 'dist'),
        }),
        new CopyPlugin({
            patterns: [
                {
                    from: 'public/static',
                    to: path.resolve(__dirname, 'dist/static') 
                }
            ]
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [MiniCSSExtractPlugin.loader, 'css-loader']
            },
            {
                test: /\.(png|jpg|svg|gif)$/,
                use: ['file-loader']
            },
            {
                test: /\.js$/,
                exclude: '/node_modules/',
                loader: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.ts$/,
                exclude: '/node_modules/',
                loader: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env',
                            '@babel/preset-typescript'
                        ],
                        plugins: [
                            '@babel/plugin-proposal-class-properties'
                        ]
                    }
                }
            }
        ]
    }
};
