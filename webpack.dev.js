const path = require("path");
const common = require("./webpack.common");
const { merge } = require("webpack-merge");


module.exports = merge(common, {
  mode: "development",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    assetModuleFilename: "./imgs/[name].[hash].[ext]"  // html loader needed
  },
  // devServer: {
  //   static: {
  //     directory: path.join(__dirname, 'assets'), // Serve files from the 'assets' folder
  //   },
  // }
});
