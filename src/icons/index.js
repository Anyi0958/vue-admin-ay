import Vue from "vue";
import AnIcon from "@/components/AnIcon"; // svg component

// register globally
Vue.component("an-icon", AnIcon);

// 自动导入svg-icon
// require.context有三个参数：
//    directory：说明需要检索的目录
//    useSubdirectories：是否检索子目录
//    regExp: 匹配文件的正则表达式

const icons = require.context("./svg", false, /\.svg$/);
const modules = {};

icons.keys().forEach(key => {
  modules[key.replace(/(\.\/|\.svg)/g, "")] = icons(key).default;
});

const requireAll = requireContext => requireContext.keys().map(requireContext);
requireAll(icons);

export default modules;
