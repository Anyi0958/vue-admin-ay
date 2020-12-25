<template>
  <el-aside class="aside-container">
    <div class="header-logo">
      <an-icon type="svg-yun" :color="variables.asideTextColor" size="50"></an-icon>
      <span>{{ $t("login.title") }}</span>
    </div>

    <el-menu
      :router="false"
      :unique-opened="false"
      :default-active="activeMenu"
      :collapse="false"
      :background-color="variables.sideBarBackground"
      :text-color="variables.sideBarTextColor"
      :active-text-color="variables.sideBarActiveTextColor"
    >
      <asideBarItem :menu-list="menuList"></asideBarItem>
    </el-menu>

    <div class="footer-btn">
      <an-icon type="svg-yun"></an-icon>
    </div>
  </el-aside>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

let name = "asideBar";

import asideBarItem from "./components/sidebarItem";
import variables from "@/styles/app.scss";
import { mapState, mapMutations } from "vuex";
import { appStoreKeys as APP } from "@/config/settings";

export default {
  name: "AsideBar",

  //import引入的组件需要注入到对象中才能使用
  components: {
    asideBarItem,
  },

  props: {
    msg: {
      // 数据类型
      type: [String, Number, Boolean, Function, Object, Array, Symbol],
      // 是否必填
      required: false,
      // 默认值
      default: () => {
        return null;
      },
      // 验证函数
      validator: function (value) {
        // 这个值必须匹配下列字符串中的一个
        return ["success", "warning", "danger"].indexOf(value) !== -1;
      },
    },
  },

  data() {
    //这里存放数据
    return {
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
      ],
    };
  },
  //监听属性 类似于data概念
  computed: {
    ...mapState({
      sideBarUnfold: state => state.app.sideBarUnfold,
    }),
    activeMenu() {
      const route = this.$route;
      console.log(route);
      const { meta, path } = route;
      // if set path, the sidebar will highlight the path you set
      if (meta.activeMenu) {
        return meta.activeMenu;
      }
      return path;
    },
    variables() {
      return variables;
    },
  },

  //监控data中的数据变化
  watch: {},

  //生命周期 - 创建之前
  beforeCreate() {},

  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},

  //生命周期 - 挂载之前
  beforeMount() {},

  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    this.setSideBar("ssss");
  },

  //生命周期 - 更新之前
  beforeUpdate() {},

  //生命周期 - 更新之后
  updated() {},

  //生命周期 - 销毁之前
  beforeDestroy() {},

  //生命周期 - 销毁完成
  destroyed() {},

  //如果页面有keep-alive缓存功能，这个函数会触发
  activated() {},

  //方法集合
  methods: {
    ...mapMutations({
      setSideBar: `app/SET_SIDEBAR_UNFOLD`,
    }),
  },
};
</script>
<style lang="scss" scoped>
.aside-container {
  @include scrollBar(0);
  position: relative;
  width: 100%;
  overflow: hidden;
  transition: width $base-transition-time;

  .logo {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 997;
    @include flex;
    height: $base-nav-bar-height;
    overflow: hidden;
    font-size: 20px;
    font-weight: bold;
    color: $base-color-blue;
    color: $base-sideBar-textColor;
    white-space: nowrap;
    background: $base-sideBar-background;
    transition: width $base-transition-time;
    span {
      margin-left: 10px;
    }
  }
  .el-menu {
    height: 100vh;
    overflow-y: auto;
    border-right: none !important;
  }
}
</style>
