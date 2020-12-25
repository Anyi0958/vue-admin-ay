<template>
  <div
    class="sidebar"
    :style="{ width: sideBarUnfold ? variables.sideBarWidethMin : variables.sideBarWidethMax }"
  >
    <div class="header">
      <a href="/" class="header-logo">
        <an-icon type="svg-yun" :color="variables.asideTextColor" size="48"></an-icon>
        <span v-show="!sideBarUnfold" class="header-title">{{ $t("login.title") }}</span>
      </a>
    </div>

    <el-menu
      class="main"
      :router="false"
      :unique-opened="false"
      :default-active="activeMenu"
      :collapse="sideBarUnfold"
      :background-color="variables.sideBarBackground"
      :text-color="variables.sideBarTextColor"
      :active-text-color="variables.sideBarActiveTextColor"
    >
      <sideBarItem v-for="item in menuList" :key="item.id" :menu-item="item"></sideBarItem>
    </el-menu>

    <div class="footer" @click="setSideBar(!sideBarUnfold)">
      <an-icon v-if="!sideBarUnfold" type="svg-menu-close" size="24"></an-icon>
      <an-icon v-else type="svg-menu-open" size="24"></an-icon>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

let name = "asideBar";

import sideBarItem from "./components/sidebarItem";
import variables from "@/styles/app.scss";
import { mapState, mapMutations } from "vuex";
import { appStoreKeys as APP } from "@/config/settings";

export default {
  name: "AsideBar",

  //import引入的组件需要注入到对象中才能使用
  components: {
    sideBarItem,
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
    return {};
  },
  //监听属性 类似于data概念
  computed: {
    ...mapState({
      // 是否展开侧边栏
      sideBarUnfold: state => {
        let v = state.app.sideBarUnfold;
        if (v === false || v === true) {
          return v;
        } else {
          return false;
        }
      },
      menuList: state => state.app.menuList,
    }),
    // 当前选中菜单
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
    // scss样式变量
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
  mounted() {},

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
.sidebar {
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: $base-sideBar-widthMin;
  max-width: $base-sideBar-widthMax;
  height: 100%;
  padding-top: 0.1px;
  margin-top: -0.1px;
  overflow: hidden;
  user-select: none;
  background: $base-sideBar-background;
  box-shadow: 2px 0 8px 0 rgba(29, 35, 41, 0.05);
  transition: background 0.5s, width 0.5s cubic-bezier(0.2, 0, 0, 1) 0s;
  @include scrollBar(0);

  .header {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: $base-sideBar-header-height;
    overflow: hidden;
    line-height: 32px;
    color: #fff;
    cursor: pointer;
    user-select: none;
    background: $base-sideBar-background;

    .header-logo {
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 32px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      img {
        display: inline-block;
        height: 32px;
        vertical-align: middle;
      }
    }
    .header-title {
      margin: 0 0 0 12px;
      font-size: 18px;
      font-weight: 600;
      line-height: 32px;
      color: #fff;
    }
  }
  .footer {
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
    height: $base-sideBar-footer-height;
    padding: 0 16px !important;
    color: hsla(0, 0%, 100%, 0.65);
    background: $base-sideBar-background;
  }
  .main {
    flex: 1;
    overflow: hidden auto;
    zoom: 1;
    background: $base-sideBar-background;
  }
}
</style>
