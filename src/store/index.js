import Vue from "vue";
import Vuex from "vuex";

import getters from "./getters";
import actions from "./actions";
import mutations from "./mutations";

Vue.use(Vuex);

// 导入所有 vuex 模块，自动加入namespaced:true，用于解决vuex命名冲突。
// 当模块被注册后，它的所有 getter、action 及 mutation 都会自动根据模块注册的路径调整命名
const files = require.context("./modules", false, /\.js$/);
const modules = {};

files.keys().forEach(key => {
  modules[key.replace(/(\.\/|\.js)/g, "")] = files(key).default;
});

Object.keys(modules).forEach(key => {
  modules[key]["namespaced"] = true;
});

// state        全局状态
// mapState     state辅助函数   组件 computed  中使用

// getters      作为计算属性 处理 state 中的状态并 暴露为 store.getters 对象
// mapGetters   getters辅助函数 组件 computed  中使用

// mutations    更改 store 中的状态的唯一方法是提交 mutation 必须是同步函数 通过commit触发
// mapMutations 组件 methods 中 注册 mutations 方法

// acitons      异步操作 通过 mutation，变更状态。 通过dispatch触发
// mapAcitons   组件 methods 中 注册 acitons 方法

// modeules     模块化
// 模块化下 getters 中 增加第三和第四参数 rootState rootGetters
// 模块化下 actions 中 context 可以通过 context.rootState context.rootGetters

const store = new Vuex.Store({
  state: {
    AyVueAdmin: "AyVueAdmin",
  },
  getters,
  mutations,
  actions,
  modules,
  // 严格模式
  strict: process.env.NODE_ENV !== "production",
});

export default store;

/*
 *                        .::::.
 *                      .::::::::.
 *                     :::::::::::
 *                  ..:::::::::::'
 *               '::::::::::::'
 *                 .::::::::::
 *            '::::::::::::::..
 *                 ..::::::::::::.
 *               ``::::::::::::::::
 *                ::::``:::::::::'        .:::.
 *               ::::'   ':::::'       .::::::::.
 *             .::::'      ::::     .:::::::'::::.
 *            .:::'       :::::  .:::::::::' ':::::.
 *           .::'        :::::.:::::::::'      ':::::.
 *          .::'         ::::::::::::::'         ``::::.
 *      ...:::           ::::::::::::'              ``::.
 *     ````':.          ':::::::::'                  ::::..
 *                        '.:::::'                    ':'````..
 */
