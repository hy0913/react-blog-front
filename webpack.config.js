const miniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

const config = {
  mode: process.env.NODE_ENV === "production" ? "production" : "development",
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve("build"),
  },
  resolve: {
    extensions: [".js", ".jsx", ".json"],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [["@babel/preset-env"], ["@babel/preset-react"]],
          },
        },
      },
      {
        test: /\.(less$)/,
        use: [
          {
            loader: miniCssExtractPlugin.loader,
          },
          {
            loader: "babel-loader",
          },
          {
            loader: "less-loader",
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./view/index.html",
      filename: "./index.html",
    }),
  ],
  devServer: {
    hot: true,
    host: "localhost",
    port: 8080,
    open: true,
  },
};

module.exports = config;
