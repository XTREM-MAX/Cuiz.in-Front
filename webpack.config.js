const path = require("path");
const webpack = require("webpack");
//const TerserPlugin = require("terser-webpack-plugin");
//const WebpackObfuscator = require("webpack-obfuscator");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  entry: "./src/index.ts",
  devtool: false,
  mode: "development",
  target: "web",
  module: {
    rules: [
      {
        test: /\.ts/,
        use: ["ts-loader"],
      },
      {
        test: /\.worker\.js$/,
        exclude: /node_modules/,
        use: { loader: "worker-loader" },
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  output: {
    publicPath: "/",
    filename: "bundle.js",
    path: path.resolve(__dirname, ""),
  }
};
