const { src, dest } = require("gulp");
const print = require("gulp-print").default;
const { setLogFunction } = require("gulp-print");
let webpackStream = require("webpack-stream");
setLogFunction((message) => console.log("LOG", message));
let path = require("path");

exports.default = function () {
  return src("./src/**/*.js")
    .pipe(
      webpackStream({
        optimization: {
          providedExports: true,
        },
        mode: "production",
        entry: {
          index: "./src/index.js",
        },
        target: "node",
        output: {
          filename: "[name].js",
          library: {
            type: "commonjs",
          },
        },
        module: {
          rules: [
            {
              test: /\.(js|jsx)$/,
              exclude: /node_modules/,
              use: {
                loader: "babel-loader",
                options: {
                  presets: ["@babel/preset-env", "@babel/preset-react"], //预设
                  plugins: ["@babel/plugin-transform-runtime"],
                },
              },
            },
          ],
        },
      })
    )
    .pipe(dest("./dist/"));
};
