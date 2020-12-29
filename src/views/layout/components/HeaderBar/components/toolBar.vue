<template>
  <div class="toolBar">
    <!-- 主体 -->
    <span class="toolBar-item">
      <el-tooltip :content="$t('navbar.theme')">
        <an-icon type="svg-theme" color="rgba(0, 0, 0, 0.65)" size="18"></an-icon>
      </el-tooltip>
    </span>

    <!-- 全屏 -->
    <span class="toolBar-item" @click="handleFullscreen">
      <an-icon
        :type="fullscreen ? 'svg-compress' : 'svg-expend'"
        color="rgba(0, 0, 0, 0.65)"
        size="18"
      ></an-icon>
    </span>

    <!-- 通知 -->
    <span class="toolBar-item" @click="headleBell">
      <an-icon type="svg-bell" color="rgba(0, 0, 0, 0.65)" size="18"></an-icon>
    </span>

    <!-- 刷新 -->
    <span class="toolBar-item" @click="headleReload">
      <el-tooltip :content="$t('navbar.reload')">
        <an-icon type="svg-reload" color="rgba(0, 0, 0, 0.65)" size="18"></an-icon>
      </el-tooltip>
    </span>

    <!-- 切换语言 -->
    <span class="toolBar-item">
      <lang-switch color="rgba(0, 0, 0, 0.65)" size="18" />
    </span>

    <!-- 帮助 -->
    <span class="toolBar-item" @click="headleHelp">
      <el-tooltip :content="$t('navbar.help')">
        <an-icon type="svg-help" color="rgba(0, 0, 0, 0.65)" size="18"></an-icon>
      </el-tooltip>
    </span>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

let name = "toolBar";
import LangSwitch from "@/components/LangSwitch";
export default {
  name: "ToolBar",

  //import引入的组件需要注入到对象中才能使用
  components: {
    LangSwitch,
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
      fullscreen: false,
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
    // 全屏
    handleFullscreen() {
      let element = document.documentElement;
      if (this.fullscreen) {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        } else if (document.webkitCancelFullScreen) {
          document.webkitCancelFullScreen();
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen();
        } else if (document.msExitFullscreen) {
          document.msExitFullscreen();
        }
      } else {
        if (element.requestFullscreen) {
          element.requestFullscreen();
        } else if (element.webkitRequestFullScreen) {
          element.webkitRequestFullScreen();
        } else if (element.mozRequestFullScreen) {
          element.mozRequestFullScreen();
        } else if (element.msRequestFullscreen) {
          // IE11
          element.msRequestFullscreen();
        }
      }
      this.fullscreen = !this.fullscreen;
    },
    // 刷新
    headleReload() {
      this.$message("刷新");
    },
    headleBell() {
      this.$message("通知");
    },
    headleHelp() {
      this.$message("帮助");
    },
  },
};
</script>
<style lang="scss" scoped>
.toolBar {
  display: flex;
  align-items: center;
  height: 100%;

  .toolBar-item {
    display: flex;
    align-items: center;
    height: 100%;
    padding: 0 8px;
    cursor: pointer;
    &:hover {
      background: rgba(0, 0, 0, 0.025);
    }
  }
}
</style>
