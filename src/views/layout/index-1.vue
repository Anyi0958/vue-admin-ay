<template>
  <div class="layout-container">
    <div class="layout-main">
      <!-- 头部 -->
      <div class="layout-header">
        <header-bar
          :aside-width="asideWidth"
          :style="{ 'margin-left': asideWidth }"
          @menuOpen="menuOpen"
        ></header-bar>
      </div>

      <!-- 侧边栏 -->
      <div class="layout-aside">
        <aside-bar :aside-width="asideWidth"></aside-bar>
      </div>

      <!-- 主体 -->
      <div class="layout-app" :style="{ 'margin-left': asideWidth }">
        <router-view />
      </div>

      <!--  底部 -->
      <div class="layout-footer" :style="{ 'margin-left': asideWidth }">
        <footer-bar></footer-bar>
      </div>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

let name = "layout";
import FooterBar from "@/components/FooterBar";
import AsideBar from "./components/AsideBar/index";
import HeaderBar from "./components/HeaderBar/index";
export default {
  name: "Layout",

  //import引入的组件需要注入到对象中才能使用
  components: {
    FooterBar,
    AsideBar,
    HeaderBar,
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
    return {
      themeType: 1,
      asideWidth: "260px",
    };
  },
  //监听属性 类似于data概念
  computed: {},

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
    // 菜单展开收起
    menuOpen() {
      console.log("ss");
      if (this.asideWidth == "260px") {
        this.asideWidth = "60px";
      } else {
        this.asideWidth = "260px";
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.layout-container {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  .layout-aside {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    z-index: 999;
    width: auto;
    height: 100vh;
    // overflow-y: auto;
    user-select: none;
    background: $base-menu-background;
    box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
    transition: width 0.3s;
  }
  .layout-main {
    position: relative;
    width: auto;
    height: 100vh;
    overflow-y: auto;
    background: $base-color-white;
    transition: width 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    .layout-header {
      position: fixed;
      // position: relative;
      top: 0;
      left: 0;
      z-index: 997;
      width: 100%;
      height: auto;
      box-shadow: $base-box-shadow;
    }
    .layout-app {
      position: relative;
      display: block;
      flex: 1;
      flex-basis: auto;
      width: 100%;
      height: auto;
      padding: 20px;
      margin-top: $base-nav-bar-height + $base-tabs-bar-height;
      overflow-y: auto;
    }

    .layout-footer {
      position: fixed;
      // position: relative;
      bottom: 0;
      left: 0;
      z-index: 997;
      width: 100%;
      height: auto;
      height: 30px !important;
      font-family: Arial, serif;
      line-height: 30px;
      text-align: center !important;
      background: #f6f8f9;
      .footBar {
        bottom: 0;
        width: 100%;
        height: 100%;
        overflow: hidden;
        color: #000;
      }
    }
  }
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>
