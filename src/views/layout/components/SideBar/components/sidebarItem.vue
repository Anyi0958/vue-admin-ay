<template>
  <!-- 多级菜单 -->
  <el-submenu v-if="menuChildern(menuItem)" :index="menuItem.path" class="an-menuItem">
    <template slot="title">
      <!-- 菜单icon -->
      <an-icon :type="menuItem.icon" class="an-menuItem-icon" />
      <!-- 菜单名称 -->
      <span class="an-menuItem-title">{{ menuItem.title }}</span>
    </template>

    <sidebar-item v-for="item in menuItem.children" :key="item.id" :menu-item="item"></sidebar-item>
  </el-submenu>

  <!-- 一级菜单 -->
  <el-menu-item v-else :index="menuItem.path" :router="menuItem.path" class="an-menuItem">
    <an-icon :type="menuItem.icon" class="an-menuItem-icon" />
    <span slot="title" class="an-menuItem-title">{{ menuItem.title }}</span>
  </el-menu-item>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

let name = "sidebarItem";

export default {
  name: "SidebarItem",

  //import引入的组件需要注入到对象中才能使用
  components: {},

  props: {
    menuItem: {
      // 数据类型
      type: [Array, Object],
      // 是否必填
      required: false,
      // 默认值
      default: () => {
        return {};
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
  methods: {
    menuChildern(menuItem) {
      if (
        Object.prototype.toString.call(menuItem.children) == "[object Array]" &&
        menuItem.children.length > 0
      ) {
        return true;
      }
      return false;
    },
  },
};
</script>
<style lang="scss" scoped>
.an-menuItem-icon {
  vertical-align: -0.125em;
}

.an-menuItem-title {
  margin-left: 10px;
  vertical-align: baseline;
}
</style>
