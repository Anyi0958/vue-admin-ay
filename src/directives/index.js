import Vue from "vue";

const files = require.context("./js", false, /\.js$/);
const modules = {};

files.keys().forEach(key => {
  modules[key.replace(/(\.\/|\.js)/g, "")] = files(key).default;
});

Object.keys(modules).forEach(key => {
  Vue.use(modules[key]);
});
