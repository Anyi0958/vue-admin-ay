<template>
  <div class="home-container">
    <!-- <LangSwitch :color="'#ccc'" /> -->

    <el-row>
      <el-time-select
        :picker-options="{
          start: '08:30',
          step: '00:15',
          end: '18:30',
        }"
      ></el-time-select>
      <el-button>默认按钮</el-button>
      <el-button type="primary">{{ $t("route.dashboard") }}</el-button>
      <el-button type="success">成功按钮</el-button>
      <el-button type="info">信息按钮</el-button>
      <el-button type="warning">警告按钮</el-button>
      <el-button type="danger">危险按钮</el-button>
    </el-row>

    <an-icon icon-class="svg-yun" color="#1296db" size="50" />

    <el-button @click="loginOut">注销</el-button>

    <img alt="Vue logo" src="../assets/logo.png" />

    <HelloWorld msg="Welcome to Your Vue.js App" />

    <div class="block">
      <span class="demonstration">显示总数</span>
      <el-pagination
        :current-page.sync="currentPage1"
        :page-size="100"
        layout="total, prev, pager, next"
        :total="1000"
      ></el-pagination>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

let name = "首页";

import LangSwitch from "@/components/LangSwitch";
import HelloWorld from "@/views/HelloWorld.vue";
import Cookies from "js-cookie";
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";

export default {
  name: "Home",

  //import引入的组件需要注入到对象中才能使用
  components: {
    HelloWorld,
    // LangSwitch,
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
      currentPage1: 5,
      currentPage2: 5,
      currentPage3: 5,
      currentPage4: 4,
    };
  },
  //监听属性 类似于data概念
  computed: {
    // ...mapState({
    //   rootData: state => state.AyVueAdmin,
    // }),
    // ...mapGetters({
    //   rootGett: "AyVueAdmin",
    // }),
    // ...mapState({
    //   userData: state => state.user.token,
    // }),
    // ...mapGetters({
    //   userGett: "user/token",
    // }),
    // ...mapState("user", {
    //   userData: "token",
    // }),
    // ...mapGetters("user", {
    //   userGett: "token",
    // }),
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
    // console.warn(" ");
    // console.log("根节点State", this.rootData);
    // console.log("根节点State", this.$store.state.AyVueAdmin);
    // console.warn(" ");
    // console.log("根节Getters", this.rootGett(99));
    // console.log("根节Getters", this.$store.getters.AyVueAdmin(99));
    // console.warn(" ");
    // this.rootMutations({ name: "mutions1" });
    // this.$store.commit("AyVueAdmin1", { name: "mutions2" });
    // this.$store.commit({
    //   type: "AyVueAdmin1",
    //   name: "mutions3",
    // });
    // console.warn(" ");
    // console.log("根节点Actions", this.rootActions("bbbb"));
    // console.log("根节点Actions", this.$store.dispatch("AyVueAdmin2", "bbbb"));
    // console.warn(" ");
    // console.log("USER节点State", this.userData);
    // console.log("USER节点State", this.$store.state.user.token);
    // console.warn(" ");
    // console.log("USER节点Getters", this.userGett(666));
    // console.log("USER节点Getters", this.$store.getters["user/token"](666));
    // console.warn(" ");
    // console.log("USER节点Mutations", this.userMutations("zh"));
    // console.log("USER节点Mutations", this.$store.commit("user/SET_LANGUAGE", "zh"));
    // console.warn(" ");
    // console.log("USER节点Acitons", this.userActions("zh"));
    // console.log("USER节点Acitons", this.$store.dispatch("user/language", "zh"));
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
      rootMutations: "AyVueAdmin1",
    }),
    ...mapActions({
      rootActions: "AyVueAdmin2",
    }),

    ...mapMutations({
      userMutations: "user/SET_LANGUAGE",
    }),
    ...mapActions({
      userActions: "user/language",
    }),

    async loginOut() {
      await this.$store.dispatch("user/logout");
      this.$router.push("/Login");
    },
  },
};
</script>

<style lang="scss" scoped>
.home-container {
  height: 200vh;
  transition: width 0.3s;
}
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
</style>
