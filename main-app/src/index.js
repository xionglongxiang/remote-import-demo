import remote from 'import-remote';

remote("http://localhost:9527/index.js", {
  externals: {
    react: require("react"),
  },
}).then((module) => {
  console.log("import module: ", module);
  module.modal("show my own message!");
});
