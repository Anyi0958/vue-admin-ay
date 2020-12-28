<template>
  <div class="header-container">
    <!-- 菜单 -->
    <el-row class="header-nav">
      <el-col :xs="0" :sm="12" :md="12" :lg="12" :xl="12" class="left-panel">
        <!-- 菜单展开按钮 -->

        <!-- 面包屑 -->
        <el-breadcrumb separator="/" class="header-nav-breadcrumb">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/' }">活动管理</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/' }">活动列表</el-breadcrumb-item>
          <el-breadcrumb-item>活动详情</el-breadcrumb-item>
        </el-breadcrumb>
      </el-col>

      <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12" class="right-panel">
        <!-- 头像 -->
        <user-bar />

        <!--  工具栏 -->
        <tool-bar />
      </el-col>
    </el-row>

    <!-- 标签栏 -->
    <TagsBar></TagsBar>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

let name = "header";

import TagsBar from "../TagsBar/index";
import ToolBar from "./components/toolBar";
import UserBar from "./components/userBar";
export default {
  name: "Header",

  //import引入的组件需要注入到对象中才能使用
  components: {
    TagsBar,
    ToolBar,
    UserBar,
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
  background: #fff;
  .header-nav {
    display: flex;
    align-items: center;
    height: $base-nav-bar-height;
    padding: 0 20px;
    .left-panel {
      display: flex;
      align-items: center;
      height: 100%;
      overflow: hidden;
    }
    .right-panel {
      display: flex;
      flex-direction: row-reverse;
      align-items: center;
      height: 100%;
      overflow: hidden;
    }
  }
  .header-nav-breadcrumb {
    display: flex;
    white-space: nowrap;
  }
}

.breadcrumb-container-light {
  margin-left: 20px;

  ::v-deep {
    .el-breadcrumb__item {
      .el-breadcrumb__inner {
        a {
          display: flex;
          float: left;
          font-weight: normal;
          color: #515a6e;

          i {
            margin-right: 3px;
          }
        }
      }
      .el-breadcrumb__separator {
        color: #515a6e;
      }

      &:last-child {
        .el-breadcrumb__inner {
          a {
            color: #999;
          }
        }
      }
    }
  }
}

.breadcrumb-container-dark {
  margin-left: 20px;

  ::v-deep {
    .el-breadcrumb__item {
      .el-breadcrumb__inner {
        color: #fff;
        a {
          display: flex;
          float: left;
          font-weight: normal;
          color: #fff;

          i {
            margin-right: 3px;
          }
        }
      }
      .el-breadcrumb__separator {
        color: #fff;
      }

      &:last-child {
        .el-breadcrumb__inner {
          a {
            color: #ddd;
          }
        }
      }
    }
  }
}
</style>
