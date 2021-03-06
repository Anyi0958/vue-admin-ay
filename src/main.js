import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import Initializer from "./config/index";

// 配置国际化
import i18n from "@/lang/index";

// 阻止显示生产模式的消息
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  i18n,
  // init localstorage, vuex
  created: Initializer,
  render: h => h(App),
}).$mount("#app");
