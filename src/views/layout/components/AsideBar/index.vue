<template>
  <el-aside :width="asideWidth" class="aside-container">
    <div v-if="navType == 1" class="logo" :style="{ width: asideWidth }">
      <svg-icon icon-class="yun" :color="variables.asideTextColor" size="50" />
      <span v-if="!isCollapse">{{ $t("login.title") }}</span>
    </div>

    <el-menu
      :style="{ 'margin-top': navType == 1 ? '60px' : '0' }"
      default-active="1-4-1"
      :collapse="isCollapse"
      :background-color="navType == 2 ? '#fff' : variables.asideBackground"
      :text-color="navType == 2 ? '#000' : variables.asideTextColor"
      :active-text-color="navType == 2 ? '#000' : variables.asideActiveTextColor"
    >
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">导航一</span>
        </template>
        <el-menu-item-group>
          <span slot="title">分组一</span>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <span slot="title">选项4</span>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">导航二</span>
      </el-menu-item>
      <el-menu-item index="3" disabled>
        <i class="el-icon-document"></i>
        <span slot="title">导航三</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title">导航四</span>
      </el-menu-item>
    </el-menu>
  </el-aside>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

let name = "aside";

export default {
  name: "Aside",

  //import引入的组件需要注入到对象中才能使用
  components: {},

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
    asideWidth: {
      // 数据类型
      type: [String],
      // 是否必填
      required: true,
      // 默认值
      default: () => {
        return "260px";
      },
    },
    variables: {
      // 数据类型
      type: [String, Number, Boolean, Function, Object, Array, Symbol],
      // 是否必填
      required: false,
      // 默认值
      default: () => {
        return [];
      },
    },
  },

  data() {
    //这里存放数据
    return {};
  },
  //监听属性 类似于data概念
  computed: {
    isCollapse() {
      return this.asideWidth == "260px" ? false : true;
    },
    navType() {
      return this.$store.getters.navType;
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
  methods: {},
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
    color: $base-aside-text-color;
    white-space: nowrap;
    background: $base-aside-background;
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
