const _ext = require("../build/Release/hello.node");

Object.assign(module.exports, _ext);

module.exports.VERSION = "__VERSION__";
