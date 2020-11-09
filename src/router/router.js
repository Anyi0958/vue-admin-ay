import Home from "../views/Home.vue";

export const commonRouter = [
  {
    path: "/",
    redirect: "/Ay-Admin-Vue",
  },
  {
    path: "/Ay-Admin-Vue",
    name: "Ay-Admin-Vue",
    component: () => import("@/views/layout/index.vue"),
    children: [
      {
        path: "",
        name: "Home",
        component: Home,
      },
    ],
  },
  {
    path: "/login",
    name: "login",
    meta: {
      title: "登录",
    },
    component: () => import("@/views/login/login.vue"),
  },
  {
    path: "/register",
    name: "register",
    meta: {
      title: "注册",
    },
    component: () => import("@/views/register/register.vue"),
  },
  {
    path: "/about",
    name: "about",
    meta: {
      title: "关于",
    },
    component: () => import("@/views/About.vue"),
  },
];

// 所有上面定义的路由都要写在下面的routers里
export const routers = [...commonRouter];
