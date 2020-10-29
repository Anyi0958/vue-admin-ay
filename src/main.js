import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "./config/index";

// 配置国际化
import i18n from "./lang/index";

// 阻止显示生产模式的消息
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  i18n,
  data: {},
  watch: {
    $route(to, from) {
      // 对路由变化作出响应...
      console.log("==============路由变化===============");
      console.warn("当前路由", to);
      console.warn("跳转路由", from);
      console.log("==============路由变化===============");
    },
  },
  mounted() {},
  methods: {},
  render: h => h(App),
}).$mount("#app");
