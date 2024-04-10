const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  // output: {
  //   filename: "main.[contenthash].js",
  //   path: path.resolve(__dirname, "dist"),
  // },
  plugins: [new HtmlWebpackPlugin({
    template:'./src/template.html',
  })],
  module: {
    rules: [
      {
        exclude:/(node_modules)/,
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test:/\.html$/,
        use: ["html-loader"]
      }
    ]
  }
};
