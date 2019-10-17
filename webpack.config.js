const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: "development",
    devtool: "none",
    entry: "./src/index.js",
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/views/template.html"
        }),
        new CleanWebpackPlugin({
            dry: true
        })
    ],
    output: {
        filename: "main.[contentHash].js",
        path: path.resolve(__dirname, "dist")
    }
}