import Home from "../views/Home.vue";

export const commonRouter = [
  {
    path: "/",
    redirect: "/Ay-Admin-Vue",
  },
  {
    path: "/Ay-Admin-Vue",
    //设定路由的名字，首字母大写，一定要填写并且要跟view的name对应不然使用<keep-alive>时会出现各种问题
    name: "Ay-Admin-Vue",
    component: () => import("@/views/layout/index.vue"),
    children: [
      {
        path: "",
        name: "Home",
        //当设置 true 的时候该路由不会再侧边栏出现
        hidden: true, // (不写的话默认 false)
        //当设置 false 的时候该路由在面包屑导航中不可被点击
        redirect: false,
        //是否显示根节点，如果children只有一个时此项为false，会不显示父级，此项为true会显示父级
        alwaysShow: true,
        meta: {
          //是否固定不允许删除
          affix: true,
          //bage小红框显示的文字内容
          badge: "Pro",
          // 如果设置为false，则不会在breadcrumb面包屑中显示
          breadcrumb: false,
          //设置该路由进入的权限，支持多个权限叠加
          permissions: ["admin", "editor", "test"],
          //设置该路由在侧边栏和面包屑中展示的名字
          title: "首页",
          //设置该路由的图标,在常规图标中拷贝即可
          icon: "",
          //如果设置为true，则不会被 <keep-alive> 缓存(默认 false)
          noKeepAlive: true,
        },
        component: Home,
      },
    ],
  },
  {
    path: "/login",
    name: "Login",
    meta: {
      title: "登录",
    },
    component: () => import("@/views/login/login.vue"),
  },
  {
    path: "/register",
    name: "Register",
    meta: {
      title: "注册",
    },
    component: () => import("@/views/register/register.vue"),
  },
  {
    path: "/about",
    name: "About",
    meta: {
      title: "关于",
    },
    component: () => import("@/views/About.vue"),
  },
];

// 所有上面定义的路由都要写在下面的routers里
export const routers = [...commonRouter];
