<template>
  <div class="layout-main">
    <!-- 侧边栏 -->
    <div class="layout-side">
      <side-bar></side-bar>
    </div>

    <!-- 主体 -->
    <div class="layout-app">
      <!-- 头部 -->
      <div class="layout-header">
        <header-bar></header-bar>
      </div>

      <!-- 内容 -->
      <div class="layout-content">
        <div>
          <router-view />
        </div>
      </div>

      <!--  底部 -->
      <div class="layout-footer">
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
import SideBar from "./components/SideBar/index";
import HeaderBar from "./components/HeaderBar/index";
export default {
  name: "Layout",

  //import引入的组件需要注入到对象中才能使用
  components: {
    FooterBar,
    SideBar,
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
    return {};
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
  methods: {},
};
</script>
<style lang="scss" scoped>
.layout-main {
  position: relative;
  display: flex;
  width: 100%;
  height: 100%;
  overflow: auto hidden;
  background: #f0f2f5;
  .layout-side {
    z-index: 999;
    width: auto;
    height: 100%;
    user-select: none;
    box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
  }
  .layout-app {
    position: relative;
    display: flex;
    flex: 1;
    flex-direction: column;
    width: auto;
    min-width: $base-app-widthMin;
    height: 100%;
    height: 100%;
    overflow: auto;
    background: #f0f2f5;
    .layout-header {
      width: 100%;
      height: auto;
    }
    .layout-content {
      flex: 1; // 控制固定头部+底部
      width: 100%;
      height: auto;
      overflow: hidden; // 控制固定头部+底部
      & > div {
        width: 100%;
        height: 100%;
        overflow: auto;
      }
    }
    .layout-footer {
      width: 100%;
      height: 40px;
      line-height: 40px;
      background: #606266;
      ::v-deep {
        .footBar {
          color: #fff;
        }
      }
    }
  }
}
</style>
