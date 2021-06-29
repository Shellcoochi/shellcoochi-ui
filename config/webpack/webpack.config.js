const path = require("path");
const env = require("dotenv").config();
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: "./src/index.js",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        options: { presets: ["@babel/env"] },
      },
      { test: /\.tsx?$/, loader: "ts-loader" },
      {
        test: /\.less$/,
        use: [
          MiniCssExtractPlugin.loader, //mini-css-extract-plugin 与 "style-loader"冲突 报错ReferenceError: window is not defined
          // { loader: "style-loader" },
          {
            //配置CSS module
            loader: "css-loader",
            options: {
              modules: true,
              localIdentName: "[path][name]-[local]-[contenthash:base64:5]", //自定义模块化的类名
            },
          },
          { loader: "less-loader" },
        ],
      },
      {
        test: /\.html$/i,
        loader: "html-loader", //解决html模板图片图片引用问题
      },
    ],
  },
  resolve: {
    extensions: ["*", ".js", ".jsx", ".ts", ".tsx", ".json"],
    alias: {
      "@src": path.resolve("src"),
      "@components": path.resolve("src/components"),
    },
  },
  output: {
    path: path.resolve(__dirname, "../../dist"),
    publicPath: "/",
    filename: "bundle.[contenthash:8].js", //通过哈希值解决JS缓存问题(在没有修改JS要打包的内容时，不会重新打包一个JS文件)
  },
};
