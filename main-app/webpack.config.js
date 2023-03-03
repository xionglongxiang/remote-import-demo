const path = require("path");

module.exports = {
  experiments: {
    topLevelAwait: true,
  },
  devServer: {
    static: {
      directory: "./dist",
    },
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    port: 3000,
  },
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
};
