<template>
  <div id="tabs-bar-container" class="tabs-bar-container">
    <el-tabs
      v-model="tabActive"
      type="card"
      class="tabs-content"
      @tab-click="handleTabClick"
      @tab-remove="handleTabRemove"
    >
      <el-tab-pane
        v-for="item in visitedRoutes"
        :key="item.path"
        :name="item.path"
        :closable="!isAffix(item)"
      >
        <span slot="label">
          <svg-icon :icon-class="item.icon" size="14"></svg-icon>
          {{ lange == "zh" ? item.zhTitle : item.enTitle }}
        </span>
      </el-tab-pane>
    </el-tabs>

    <el-dropdown @command="handleCommand">
      <span class="tabAciton">
        <span>
          {{ $t("tagBar.action") }}
        </span>
        <i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown" class="tabs-more">
        <!-- <el-dropdown-item command="refreshRoute">
          <vab-icon :icon="['fas', 'circle-notch']" />
          刷新
        </el-dropdown-item> -->
        <el-dropdown-item command="closeOtherstabs">{{ $t("tagBar.closeOther") }}</el-dropdown-item>
        <el-dropdown-item command="closeLefttabs">{{ $t("tagBar.closeLeft") }}</el-dropdown-item>
        <el-dropdown-item command="closeRighttabs">{{ $t("tagBar.closeRight") }}</el-dropdown-item>
        <el-dropdown-item command="closeAlltabs">{{ $t("tagBar.closeAll") }}</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
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
    return {
      tabActive: "Tab 8",
      visitedRoutes: [
        {
          path: "Tab 1",
          zhTitle: " Zh Tab 1",
          enTitle: "En Tab 1 ",
          icon: "el-icon-date",
        },
        {
          path: "Tab 2",
          zhTitle: " Zh Tab 2",
          enTitle: "En Tab 2 ",
          icon: "el-icon-date",
        },
        {
          path: "Tab 3",
          zhTitle: " Zh Tab 3",
          enTitle: "En Tab 3 ",
          icon: "el-icon-date",
        },
        {
          path: "Tab 4",
          zhTitle: " Zh Tab 4",
          enTitle: "En Tab 4 ",
          icon: "el-icon-date",
        },
        {
          path: "Tab 5",
          zhTitle: " Zh Tab 5",
          enTitle: "En Tab 5 ",
          icon: "el-icon-date",
        },
        {
          path: "Tab 6",
          zhTitle: " Zh Tab 6",
          enTitle: "En Tab 6 ",
          icon: "el-icon-date",
        },
        {
          path: "Tab 7",
          zhTitle: " Zh Tab 7",
          enTitle: "En Tab 7 ",
          icon: "el-icon-date",
        },
        {
          path: "Tab 8",
          zhTitle: " Zh Tab 8",
          enTitle: "En Tab 8 ",
          icon: "el-icon-date",
        },
        {
          path: "Tab 9",
          zhTitle: " Zh Tab 9",
          enTitle: "En Tab 9 ",
          icon: "el-icon-date",
        },
        {
          path: "Tab 10",
          zhTitle: "Zh Tab 10",
          enTitle: "En Tab 10 ",
          icon: "el-icon-date",
        },
        {
          path: "Tab 11",
          zhTitle: "Zh Tab 11",
          enTitle: "En Tab 11 ",
          icon: "el-icon-date",
        },

        {
          path: "Tab 12",
          zhTitle: "Zh Tab 12",
          enTitle: "En Tab 12 ",
          icon: "el-icon-date",
        },
        {
          path: "Tab 13",
          zhTitle: "Zh Tab 13",
          enTitle: "En Tab 13 ",
          icon: "el-icon-date",
        },
        {
          path: "Tab 14",
          zhTitle: "Zh Tab 14",
          enTitle: "En Tab 14 ",
          icon: "el-icon-date",
        },
        {
          path: "Tab 15",
          zhTitle: "Zh Tab 15",
          enTitle: "En Tab 15 ",
          icon: "el-icon-date",
        },
        {
          path: "Tab 16",
          zhTitle: "Zh Tab 16",
          enTitle: "En Tab 16 ",
          icon: "el-icon-date",
        },
      ],
    };
  },
  //监听属性 类似于data概念
  computed: {
    lange() {
      return this.$store.state.user.language;
    },
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
    handleTabClick() {},
    handleTabRemove() {},
    handleCommand(v) {
      let tagIndex = this.visitedRoutes.length;
      switch (v) {
        case "closeOtherstabs":
          this.visitedRoutes = this.visitedRoutes.filter(item => {
            return this.isAffix(item) || item.path == this.tabActive;
          });
          break;
        case "closeLefttabs":
          this.visitedRoutes = this.visitedRoutes.filter((item, index) => {
            if (item.path == this.tabActive) tagIndex = index;
            return this.isAffix(item) || tagIndex <= index;
          });
          break;
        case "closeRighttabs":
          this.visitedRoutes = this.visitedRoutes.filter((item, index) => {
            if (item.path == this.tabActive) tagIndex = index;
            return this.isAffix(item) || tagIndex >= index;
          });
          break;
        case "closeAlltabs":
          this.visitedRoutes = this.visitedRoutes.filter(item => {
            return this.isAffix(item);
          });
          break;
        default:
          break;
      }
    },
    isAffix(tag) {
      if (tag.path == "Tab 1" || tag.path == "Tab 3") return true;
      return false;
    },
  },
};
</script>
<style lang="scss" scoped>
.tabs-bar-container {
  position: relative;
  box-sizing: border-box;
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: space-between;
  height: $base-tabs-bar-height;
  padding-right: $base-padding;
  padding-left: $base-padding;
  user-select: none;
  background: $base-color-white;
  border-top: 1px solid #f6f6f6;

  ::v-deep {
    .fold-unfold {
      margin-right: $base-padding;
    }
  }
  .tabAciton {
    display: flex;
    align-items: center;
    cursor: pointer;
    &:first-child span {
      display: inline-block;
      max-width: 70px;
      margin-right: 5px;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }

  .tabs-content {
    width: calc(100% - 100px);
    height: $base-tag-item-height;

    ::v-deep {
      .el-tabs__nav-next,
      .el-tabs__nav-prev {
        height: $base-tag-item-height;
        line-height: $base-tag-item-height;
      }

      .el-tabs__header {
        border-bottom: 0;

        .el-tabs__nav {
          border: 0;
        }

        .el-tabs__item {
          box-sizing: border-box;
          height: $base-tag-item-height;
          margin-right: 5px;
          line-height: $base-tag-item-height;
          border: 1px solid $base-border-color;
          border-radius: $base-border-radius;
          transition: padding 0.3s cubic-bezier(0.645, 0.045, 0.355, 1) !important;

          &.is-active {
            border: 1px solid $base-color-blue;
          }
        }
      }
    }
  }

  .more {
    display: flex;
    align-content: center;
    align-items: center;
    cursor: pointer;
  }
}
</style>
