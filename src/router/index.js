// vue-router 使用文档 router.vuejs.org/zh/
import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

import nprogress from "nprogress";
import "nprogress/nprogress.css";

Vue.use(VueRouter);

nprogress.configure({
  easing: "ease",
  speed: 500,
  trickleSpeed: 200,
  showSpinner: false,
});

const routes = [
  {
    path: "/",
    name: "Home",
    redirect: "/Ay-Admin-Vue",
    meta: {
      title: "Ay-Admin-Vue",
    },
  },
  {
    path: "/Ay-Admin-Vue",
    name: "Ay-Admin-Vue",
    component: Home,
    meta: {
      title: "Ay-Admin-Vue",
    },
  },
  {
    path: "/about",
    name: "about",
    component: () => import("@/views/About.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/login/login.vue"),
  },
  {
    path: "/register",
    name: "register",
    component: () => import("@/views/register/register.vue"),
    children: [
      {
        path: "",
        component: Home,
      },
      {
        path: "sss",
        component: Home,
      },
    ],
  },
  {
    path: "*",
    component: () => import("@/views/login/login.vue"),
  },
];

export const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;

router.beforeEach((to, from, next) => {
  nprogress.start();
  // 对路由变化作出响应...
  console.log("==============路由变化===============");
  console.warn("当前路由", to);
  console.warn("跳转路由", from);
  console.log("==============路由变化===============");
  next();
});

router.afterEach(to => {
  // Util.openNewPage(router.app, to.name, to.params, to.query);
  nprogress.done();
  window.scrollTo(0, 0);
});
