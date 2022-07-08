/* eslint @typescript-eslint/no-var-requires: "off" */
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const path = require("path");
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = [
    new ForkTsCheckerWebpackPlugin(),
    new CopyWebpackPlugin({
        patterns: [{
            from: path.resolve(__dirname, '../assets'),
            to: path.resolve(__dirname, '../.webpack/renderer', "assets")
        }]
    })
];