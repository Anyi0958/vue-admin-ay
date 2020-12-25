<template>
  <el-dropdown class="userBar">
    <span class="el-dropdown-link">
      <span>
        <el-avatar :size="34" src="http://dwz.date/dpFJ"></el-avatar>
      </span>
      <span class="name">An Admin ele</span>
      <i class="el-icon-arrow-down el-icon--right"></i>
    </span>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item icon="el-icon-user">个人中心</el-dropdown-item>
      <el-dropdown-item icon="el-icon-setting">个人设置</el-dropdown-item>
      <el-dropdown-item divided icon="el-icon-switch-button">退出登录</el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

let name = "userBar";

export default {
  name: "UserBar",

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
  },

  data() {
    //这里存放数据
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
.userBar {
  display: flex;
  align-items: center;
  height: 100%;
  padding: 0 10px;
  cursor: pointer;
  .el-dropdown-link {
    display: flex;
    align-items: center;
  }
  .name {
    padding: 0 5px 0 10px;
    color: #409eff;
    white-space: nowrap;
  }
  &:hover {
    background: rgba(0, 0, 0, 0.025);
  }
}
</style>
