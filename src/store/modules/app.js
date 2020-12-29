import { appName } from "@/config/settings";
import { setStore, getStore, removeStore } from "@/libs/storage";

const app = {
  state: {
    // sideBar侧边栏菜单
    sideBarUnfold: true,
    // 菜单
    menuList: [
      {
        path: "/Ay-Admin-Vue",
        title: "首页1",
        id: "1",
        icon: "element-el-icon-location",
        children: [],
      },
      {
        path: "/daohang",
        title: "导航2",
        id: "2",
        icon: "element-el-icon-setting",
        children: [
          {
            path: "/daohang2-1",
            title: "导航2-1",
            id: "2-1",
            icon: "element-el-icon-setting",
            children: [],
          },
          {
            path: "/daohang2-2",
            title: "导航2-2",
            id: "2-2",
            icon: "element-el-icon-setting",
            children: [
              {
                path: "/daohang2-2-1",
                title: "导航2-2-1",
                id: "2-2-1",
                icon: "element-el-icon-setting",
                children: [],
              },
            ],
          },
          {
            path: "/daohang2-3",
            title: "导航2-3",
            id: "2-3",
            icon: "element-el-icon-setting",
            children: [
              {
                path: "/daohang2-3-1",
                title: "导航2-3-1",
                id: "2-3-1",
                icon: "element-el-icon-setting",
                children: [
                  {
                    path: "/daohang2-3-1-1",
                    title: "导航2-3-1-1",
                    id: "2-3-1-1",
                    icon: "element-el-icon-setting",
                    children: [],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        path: "/icon",
        title: "icon",
        id: "3",
        icon: "element-el-icon-location",
        children: [],
      },
    ],

    loading: false, // 全局加载动画
    added: false, // 加载路由标识
    navList: [], // 顶部菜单
    currNav: "", // 当前顶部菜单name
    currNavTitle: "", // 当前顶部菜单标题
    cachePage: [],
    isFullScreen: false,
    openedSubmenuArr: [], // 要展开的菜单数组

    navTheme: "light", // 导航栏主题 light 、 dark 、 primary
    leftTheme: "light", // 侧边栏主题 light 、 dark
    navType: 1, // 导航栏样式 1 - 4

    tableSize: 50, //表格
    tableSearch: true, //表格
    tableTip: true, //表格
    tableBorder: true, //表格
    tableBstripe: true, //表格

    themeColor: "",
    pageOpenedList: [
      {
        title: "首页",
        path: "",
        name: "Home",
      },
    ],
    currentPageName: "",
    currentPath: [
      {
        title: "首页",
        path: "",
        name: "Home",
      },
    ],
    // 面包屑数组
    routers: [],
    tagsList: [],
    messageCount: 0,
    // 在这里定义你不想要缓存的页面的name属性值(参见路由配置router.js)
    dontCache: ["test", "test"],
  },

  mutations: {
    SET_APP: (state, data) => {
      for (var i in data) {
        state[i] = data[i];
      }
    },

    SET_SIDEBAR_UNFOLD: (state, data) => {
      state["sideBarUnfold"] = data;

      let appData = getStore(appName, {});
      appData["sideBarUnfold"] = data;
      setStore(appName, appData);
    },
  },
};
export default app;
