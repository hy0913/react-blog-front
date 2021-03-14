const miniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const config = {
  devtool:'inline-cheap-source-map',
  mode: process.env.NODE_ENV === "production" ? "production" : "development",
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve("dist"),
    // publicPath: './build/'
  },
  resolve: {
    extensions: [".js", ".jsx", ".json"],
    alias: {
      "@": path.join(__dirname, "src"),
    },
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
            plugins: [
              [
                "import",
                {
                  libraryName: "antd",
                  libraryDirectory: "lib",
                  style: "css",
                },
              ],
            ],
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
            loader: "css-loader",
          },
          {
            loader: "less-loader",
          },
        ],
      },
      {
        test: /\.(css$)/,
        use: [
          {
            loader: miniCssExtractPlugin.loader,
          },
          {
            loader: "css-loader",
          },
        ],
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
            {
                loader: 'url-loader',
                //当加载的图片小于limit时，会直接用url-loader将图片的格式编译成base64格式的
                //当加载图片大于limit时，需要使用file-loader来编译，并且打包到dist文件夹下面
                options: {
                    limit: 16000,
                }
            }
        ]
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./view/index.html",
      filename: "./index.html",
    }),
    new MiniCssExtractPlugin(),
  ],
  devServer: {
    hot: true,
    host: "localhost",
    port: 8080,
    open: true,
  },
};

module.exports = config;
