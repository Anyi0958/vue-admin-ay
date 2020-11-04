import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

// 导入所有 vuex 模块，自动加入namespaced:true，用于解决vuex命名冲突，请勿修改。
const files = require.context("./modules", false, /\.js$/);
const modules = {};

files.keys().forEach(key => {
  modules[key.replace(/(\.\/|\.js)/g, "")] = files(key).default;
});

Object.keys(modules).forEach(key => {
  modules[key]["namespaced"] = true;
});

const store = new Vuex.Store({
  getters: {},
  state: {},
  mutations: {},
  actions: {},
  modules: modules,
});

export default store;
