// vue-router 使用文档 router.vuejs.org/zh/
import Vue from "vue";
import VueRouter from "vue-router";

import Cookies from "js-cookie";

import nprogress from "nprogress";
import "nprogress/nprogress.css";

import Util from "@/libs/util";
import setting from "@/config/settings";

import { routers, otherRouter } from "./router";

Vue.use(VueRouter);

nprogress.configure({
  easing: "ease",
  speed: 500,
  trickleSpeed: 200,
  showSpinner: false,
});

export const router = new VueRouter({
  mode: "history",
  routes: routers,
});

export default router;

router.beforeEach((to, from, next) => {
  nprogress.start();
  // 设置浏览器title
  Util.title(to.meta.title);

  // 对路由变化作出响应...
  if (setting.donation) {
    console.log(
      `%c 路由变化 %c 当前路由 ${to.name} %c 跳转路由 ${from.name}  %c`,
      "background:#35495e ; padding: 1px; border-radius: 3px 0 0 3px;  color: #fff",
      "background:#41b883 ; padding: 1px; border-radius: 3px 0 0 3px;  color: #fff",
      "background:#E6A23C ; padding: 1px; border-radius: 0 3px 3px 0;  color: #fff",
      "background:transparent"
    );
  }
  console.log(to, from);

  let name = to.name;

  // 跳转路由是否在白名单

  // 白名单
  if (Util.whiteListRoutes.includes(to.name)) {
    if (name == "login" && Cookies.get("userInfo")) {
      next({ name: "Home" });
    } else {
      next();
    }
  }
  // 不在白名单
  else {
    //  是否登录
    if (Cookies.get("userInfo")) {
      // 已登录 正常跳转
      name == "login" ? next({ name: "Home" }) : next();
    }
    // 不在白名单 且 未登录
    else {
      next({ name: "login" });
    }
  }
});

router.afterEach(to => {
  nprogress.done();
  window.scrollTo(0, 0);
});
