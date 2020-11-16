<template>
  <div class="layout-container">
    <el-container v-if="themeType == 1" class="layout">
      <el-aside width="200px" style="background-color: rgb(238, 241, 246)"></el-aside>

      <el-container>
        <el-header style="font-size: 12px; text-align: right"></el-header>

        <el-main>
          <router-view />
        </el-main>

        <el-footer>
          <footer-bar></footer-bar>
        </el-footer>
      </el-container>
    </el-container>

    <el-container v-if="themeType == 2" class="layout">
      <el-header>Header</el-header>
      <el-container>
        <el-aside width="200px" style="background-color: rgb(238, 241, 246)">Aside</el-aside>
        <el-container>
          <el-main><router-view /></el-main>
          <el-footer><footer-bar></footer-bar></el-footer>
        </el-container>
      </el-container>
    </el-container>

    <el-container v-if="themeType == 3" class="layout">
      <el-header>Header</el-header>
      <el-main><router-view /></el-main>
      <el-footer><footer-bar></footer-bar></el-footer>
    </el-container>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

let name = "layout";
import FooterBar from "@/components/FooterBar";

export default {
  name: "Layout",

  //import引入的组件需要注入到对象中才能使用
  components: {
    FooterBar,
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
    const item = {
      date: "2016-05-02",
      name: "王小虎",
      address: "上海市普陀区金沙江路 1518 弄",
    };
    return {
      themeType: 1,
      tableData: Array(20).fill(item),
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
  methods: {},
};
</script>
<style lang="scss" scoped>
//  @import 'foo.scss'; //都会导入文件 foo.scss
//  @import 'foo'; //都会导入文件 foo.scss
//  @import 'http://foo.com/bar';  // 插入外部文件
//  @import 'foo.css'; // 等同于css的import命令。
//  多行注释 - 这些使用 /**/ 写入。多行注释都保留在CSS输出。 快捷键ctrl+shift+/
//  单行注释 - 这些是使用 // 跟着注释。单行注释不会保留在CSS输出。快捷键ctrl+/
//  $ 符号来标识变量；把反复使用的css属性值定义成变量
//  在嵌套的代码块内，可以使用 & 引用父元素
//  所有数据类型均支持相等运算 == 或 !=，此外，每种数据类型也有其各自支持的运算方式。
//  数字运算: 支持数字的加减乘除、取整等运算 (+, -, *, /, %)
//  有引号的文本字符串中使用 #{} 插值语句可以添加动态的值
//  使用@extend命令 可以继承是基于类class
//  使用@mixin命令，定义一个代码块。 用@include命令，调用这个mixin。
.el-header {
  line-height: 60px;
  color: #333;
  background-color: #b3c0d1;
}

.el-aside {
  color: #333;
}
.layout-container {
  footer {
    position: relative;

    height: 30px !important;
    font-family: Arial, serif;
    line-height: 30px;
    text-align: center !important;
    .footBar {
      bottom: 0;
      width: 100%;
      height: 100%;
      overflow: hidden;
      color: #000;
    }
  }
  .layout {
    width: 100%;
    height: 100vh;
  }
}
</style>
