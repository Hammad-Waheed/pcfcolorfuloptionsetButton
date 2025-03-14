const path = require("path");

module.exports = {
  mode: "production",
  devtool: "source-map", // Avoid "eval"
  entry: "./src/index.ts",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  optimization: {
    minimize: true,
    usedExports: true,
  }
};
