<template>
  <div class="header-container">
    <!-- 菜单 -->
    <el-row :gutter="15" class="header-nav">
      <el-col :xs="4" :sm="12" :md="12" :lg="12" :xl="12" class="left-panel">
        <!-- 菜单展开按钮 -->
        <div>
          <svg-icon
            v-if="menuOpen"
            icon-class="menu-close"
            class-name="menuIcon"
            @click="headerMenu"
          />
          <svg-icon v-else icon-class="menu-open" class-name="menuIcon" @click="headerMenu" />
        </div>

        <!-- 面包屑 -->
        <el-breadcrumb separator=">" class="breadcrumb-container">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/' }">活动管理</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/' }">活动列表</el-breadcrumb-item>
          <el-breadcrumb-item>活动详情</el-breadcrumb-item>
        </el-breadcrumb>
      </el-col>

      <el-col :xs="20" :sm="12" :md="12" :lg="12" :xl="12" class="right-panel">
        <span class="user-icon">
          <svg-icon color="rgba(0,0,0,.65)" size="18" icon-class="expend" />
        </span>

        <span class="user-icon">
          <svg-icon color="rgba(0,0,0,.65)" size="18" icon-class="bell" />
        </span>

        <span class="user-icon">
          <LangSwitch color="rgba(0,0,0,.65)" size="18" />
        </span>

        <span class="user-icon">
          <el-tooltip :content="reloadText" placement="top">
            <svg-icon color="rgba(0,0,0,.65)" size="18" icon-class="reload" @click="reload" />
          </el-tooltip>
        </span>

        <span class="user-icon">
          <el-tooltip :content="helpText" placement="top">
            <svg-icon color="rgba(0,0,0,.65)" size="18" icon-class="help" />
          </el-tooltip>
        </span>

        <el-dropdown>
          <span class="el-dropdown-link">
            <img class="user-avatar" :src="'http://dwz.date/dpFJ'" alt="" />
            <div class="user-name">
              admin
              <i class="el-icon-arrow-down el-icon--right"></i>
            </div>
          </span>

          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>{{ $t("navbar.profile") }}</el-dropdown-item>
            <el-dropdown-item>{{ $t("navbar.logOut") }}</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
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

import LangSwitch from "@/components/user/LangSwitch";
import TagsBar from "../TagsBar/index";

export default {
  name: "Header",

  //import引入的组件需要注入到对象中才能使用
  components: {
    LangSwitch,
    TagsBar,
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
  },

  data() {
    //这里存放数据
    return {
      menuOpen: false,
    };
  },
  //监听属性 类似于data概念
  computed: {
    helpText() {
      return this.$t("navbar.help");
    },
    reloadText() {
      return this.$t("navbar.reload");
    },
  },

  //监控data中的数据变化
  watch: {
    asideWidth() {
      if (this.asideWidth == "260px") {
        this.menuOpen = true;
      } else {
        this.menuOpen = false;
      }
    },
  },

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
    reload() {
      this.$router.go(0);
    },
    headerMenu() {
      this.$emit("menuOpen");
    },
  },
};
</script>
<style lang="scss" scoped>
.breadcrumb-container {
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

.header-container {
  position: relative;
  height: auto;
  user-select: none;
  transition: all 0.3s;
  .el-dropdown-link {
    color: #409eff;
    cursor: pointer;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }

  .header-nav {
    padding: 0 15px;
    background: $base-color-white;
    box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
    .menuIcon {
      font-size: 30px;
      color: rgba(0, 0, 0, 0.65);
      cursor: pointer;
    }
    .left-panel {
      display: flex;
      flex-wrap: nowrap;
      align-items: center;
      justify-items: center;
      height: $base-nav-bar-height;
      overflow: hidden;
      white-space: nowrap;
    }
    .right-panel {
      position: relative;
      display: flex;
      align-content: center;
      align-items: center;
      justify-content: flex-end;
      height: $base-nav-bar-height;
      ::v-deep {
        .lang-icon {
          position: relative !important;
          top: auto;
          right: auto;
        }
      }
      .user-icon {
        display: inline-block;
        margin-left: 10px;
        cursor: pointer;
      }
      .el-dropdown-link {
        display: flex;
        align-content: center;
        align-items: center;
        justify-content: center;
        justify-items: center;
        height: 50px;
        padding: 0;
        margin-left: 15px;
        color: #409eff;
        cursor: pointer;
        .user-avatar {
          width: 40px;
          height: 40px;
          border-radius: 50%;
        }
        .user-name {
          position: relative;
          margin-left: 8px;
          margin-left: 8px;
          font-weight: 600;
          cursor: pointer;
        }
      }
      .el-icon-arrow-down {
        font-size: 12px;
      }
    }
  }
}
</style>
