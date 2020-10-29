// vue-router 使用文档 router.vuejs.org/zh/
import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

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
        path: "/",
        component: Home,
      },
    ],
  },
];

export const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
