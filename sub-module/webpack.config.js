module.exports = {
  devServer: {
    static: {
      directory: "./dist",
    },
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    port: 9527,
  },
  mode: "development",
};
