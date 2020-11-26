<template>
  <div class="header-container">
    <!-- 菜单 -->
    <el-row
      :gutter="15"
      class="header-nav"
      :style="{ 'margin-left': navWidth, background: navType == 1 ? '#fff' : 'rgb(40, 44, 52)' }"
    >
      <el-col :xs="4" :sm="12" :md="12" :lg="12" :xl="12" class="left-panel">
        <!-- <div v-if="navType == 2" class="logo" :style="{ width: tagWidth }">
          <svg-icon icon-class="yun" color="#1296db" size="50" />
          <span v-if="!isCollapse">{{ $t("login.title") }}</span>
        </div> -->

        <div v-if="navType == 2" class="logo" :style="{ width: '260px' }">
          <svg-icon icon-class="yun" color="#fff" size="50" />
          <span>{{ $t("login.title") }}</span>
        </div>

        <!-- 菜单展开按钮 -->
        <div v-if="navType == 1">
          <svg-icon
            v-if="menuOpen"
            icon-class="menu-close"
            class-name="menuIcon"
            :color="navType == 1 ? 'rgba(0,0,0,.65)' : '#fff'"
            @click="headerMenu"
          />
          <svg-icon
            v-else
            :color="navType == 1 ? 'rgba(0,0,0,.65)' : '#fff'"
            icon-class="menu-open"
            class-name="menuIcon"
            @click="headerMenu"
          />
        </div>

        <!-- 面包屑 -->
        <el-breadcrumb
          v-if="navType == 1"
          separator=">"
          :class="navType == 1 ? 'breadcrumb-container-light' : 'breadcrumb-container-dark'"
        >
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/' }">活动管理</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/' }">活动列表</el-breadcrumb-item>
          <el-breadcrumb-item>活动详情</el-breadcrumb-item>
        </el-breadcrumb>
      </el-col>

      <el-col :xs="20" :sm="12" :md="12" :lg="12" :xl="12" class="right-panel">
        <span class="user-icon">
          <el-dropdown @command="themeSwitch">
            <svg-icon
              :color="navType == 1 ? 'rgba(0,0,0,.65)' : '#fff'"
              size="20"
              icon-class="theme"
            />
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="1">左右</el-dropdown-item>
              <el-dropdown-item command="2">上下</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </span>

        <span class="user-icon">
          <svg-icon
            :color="navType == 1 ? 'rgba(0,0,0,.65)' : '#fff'"
            size="18"
            icon-class="expend"
          />
        </span>

        <span class="user-icon">
          <svg-icon
            :color="navType == 1 ? 'rgba(0,0,0,.65)' : '#fff'"
            size="18"
            icon-class="bell"
          />
        </span>

        <span class="user-icon">
          <LangSwitch :color="navType == 1 ? 'rgba(0,0,0,.65)' : '#fff'" size="18" />
        </span>

        <span class="user-icon">
          <el-tooltip :content="reloadText" placement="top">
            <svg-icon
              :color="navType == 1 ? 'rgba(0,0,0,.65)' : '#fff'"
              size="18"
              icon-class="reload"
              @click="reload"
            />
          </el-tooltip>
        </span>

        <span class="user-icon">
          <el-tooltip :content="helpText" placement="top">
            <svg-icon
              :color="navType == 1 ? 'rgba(0,0,0,.65)' : '#fff'"
              size="18"
              icon-class="help"
            />
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
    <TagsBar :style="{ 'margin-left': tagWidth }" :menu-open.sync="menuOpen"></TagsBar>
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
    navWidth: {
      // 数据类型
      type: [String, Number],
      // 是否必填
      required: true,
      // 默认值
      default: () => {
        return "260px";
      },
    },
    tagWidth: {
      // 数据类型
      type: [String, Number],
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
    return {
      menuOpen: true,
    };
  },
  //监听属性 类似于data概念
  computed: {
    navType() {
      return this.$store.getters.navType;
    },
    helpText() {
      return this.$t("navbar.help");
    },
    reloadText() {
      return this.$t("navbar.reload");
    },
    isCollapse() {
      return this.tagWidth == "260px" ? false : true;
    },
  },

  //监控data中的数据变化
  watch: {
    tagWidth() {
      if (this.tagWidth == "260px") {
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
    themeSwitch(v) {
      this.$store.commit("app/switchNavType", v);
      console.log(this.navType);
      if (this.navType == 2) {
        document.getElementsByTagName("body")[0].className = `vue-admin-theme-dark`;
      } else {
        document.getElementsByTagName("body")[0].className = ``;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
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

.header-container {
  position: relative;
  height: auto;
  user-select: none;
  transition: $base-transition;
  .el-dropdown-link {
    color: #409eff;
    cursor: pointer;
  }
  .el-icon-arrow-down {
    font-size: $base-font-size-small;
  }
  .logo {
    z-index: $base-z-index;
    @include flex;
    height: $base-nav-bar-height;
    margin-right: 20px;
    margin-left: -7px;
    overflow: hidden;
    font-size: 20px;
    font-weight: bold;
    color: $base-color-white;
    white-space: nowrap;
    transition: $base-transition;
    span {
      margin-left: 10px;
    }
  }

  .header-nav {
    padding-right: 15px;
    background: $base-nav-background;
    box-shadow: $base-box-shadow;
    .menuIcon {
      font-size: 30px;
      color: $base-nav-text-color;
      cursor: pointer;
    }
    .left-panel {
      @include flex;
      flex-wrap: nowrap;
      justify-content: flex-start;
      height: $base-nav-bar-height;
      overflow: hidden;
      white-space: nowrap;
    }
    .right-panel {
      position: relative;
      @include flex;
      align-content: center;
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
        align-content: center;
        @include flex;
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
        font-size: $base-font-size-small;
      }
    }
  }
}
</style>
