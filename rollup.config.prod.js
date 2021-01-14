const path = require("path");
const common = require("./rollup.config.common");
const { terser } = require("rollup-plugin-terser");
const outputUmdPath = path.resolve(__dirname, "./dist/index.min.js");
const outputEsPath = path.resolve(__dirname, "./dist/index.es.min.js");

common.output.find((item) => item.format === "es").file = outputEsPath;
common.output.find((item) => item.format === "umd").file = outputUmdPath;
common.plugins.push(terser());
module.exports = {
  ...common,
};
