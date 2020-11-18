<template>
  <div class="header-container">
    <!-- 菜单 -->
    <div class="header-nav">
      <!-- 菜单展开按钮 -->
      <div>
        <svg-icon icon-class="menu-open" color="" size="30" />
        <svg-icon icon-class="menu-close" class-name="menuIcon" />
      </div>
    </div>
    <!-- 标签栏 -->
    <div class="header-tigs"></div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

let name = "";

export default {
  name: "",

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
.header-container {
  position: relative;
  height: auto;
  user-select: none;
  .header-nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 60px;
    padding: 0 10px;
    background: #e6a23c;
    box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
    .menuIcon {
      font-size: 30px;
      color: rgba(0, 0, 0, 0.65);
      cursor: pointer;
    }
  }
  .header-tigs {
    height: 50px;
    background: #67c23a;
    border-top: 1px solid #f6f6f6;
    transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  }
}
</style>
