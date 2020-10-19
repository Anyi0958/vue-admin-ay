<template>
  <div class="login-container">
    <el-row class="login-content" type="flex" justify="center">
      <el-col :span="24">顶部信息</el-col>
    </el-row>
    <!-- <el-row class="login-content" type="flex" justify="center">
      <el-col :span="24">
        <el-tabs v-model="loginType">
          <el-tab-pane label="用户名登录" name="user">账号密码登录</el-tab-pane>
          <el-tab-pane label="手机号登录" name="tel">手机号登录</el-tab-pane>
        </el-tabs>
      </el-col>
    </el-row> -->
    <el-row class="login-content" type="flex" justify="center">
      <el-col :span="24">底部信息</el-col>
    </el-row>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      loginType: "user",
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  beforeCreate() {}, //生命周期 - 创建之前
  beforeMount() {}, //生命周期 - 挂载之前
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
  //方法集合
  methods: {},
};
</script>
<style lang="scss" scoped>
$min-width: 500px;
.login-container {
  width: 100%;
  height: 100%;
  .login-content {
    @extend .login-container;
  }
}
</style>
