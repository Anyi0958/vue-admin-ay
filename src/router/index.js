// vue-router 使用文档 router.vuejs.org/zh/
import Vue from "vue";
import VueRouter from "vue-router";
import store from "@/store";

import { getStore } from "@/libs/storage";

import nprogress from "nprogress";
import "nprogress/nprogress.css";

import Util from "@/libs/util";
import setting from "@/config/settings";

let tokenName = setting.tokenName;

import { routers, otherRouter } from "./router";

Vue.use(VueRouter);

nprogress.configure({
  easing: "ease",
  speed: 500,
  trickleSpeed: 200,
  showSpinner: false,
});

export const router = new VueRouter({
  mode: setting.routerMode,
  routes: routers,
});

export default router;

router.beforeEach((to, from, next) => {
  if (setting.progressBar) nprogress.start();
  // 设置浏览器title
  Util.title(to.meta.title);

  // 对路由变化作出响应...
  if (setting.donation) {
    console.log("路由变化", to, from);
  }

  let name = to.name;

  // 是否已登录
  if (getStore(tokenName)) {
    if (name == "Login") {
      next({ path: "/" });
    } else {
      const hasUserInfo = store.getters.userInfo;
      if (hasUserInfo) {
        next();
      } else {
        store
          .dispatch("user/getInfo")
          .then(res => {
            next();
          })
          .catch(() => {
            if (setting.progressBar) nprogress.done();
          });
      }
    }
  } else {
    // 跳转路由是否在白名单
    if (setting.routesWhiteList.includes(to.name)) {
      next();
    } else {
      next({ path: "/login" });
    }
  }
});

router.afterEach(to => {
  if (setting.progressBar) nprogress.done();
  window.scrollTo(0, 0);
});
