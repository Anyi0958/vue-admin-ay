<template>
  <div class="tabs-bar-container">
    <el-tabs
      v-model="tabActive"
      type="card"
      closable
      stretch
      class="an-tabs"
      @tab-click="handleTabClick"
      @tab-remove="handleTabRemove"
    >
      <el-tab-pane
        v-for="(item, index) in visitedRoutes"
        :key="index"
        :name="item.path"
        :closable="!isAffix(item)"
      >
        <span slot="label">
          <an-icon :type="item.icon" size="14"></an-icon>
          {{ language == "zh" ? item.zhTitle : item.enTitle }}
        </span>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

let name = "tagbar";
import { mapGetters } from "vuex";
export default {
  name: "Tagbar",

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
    menuOpen: {
      // 数据类型
      type: [String, Number, Boolean],
      // 是否必填
      required: false,
      // 默认值
      default: () => {
        return false;
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
          icon: "element-el-icon-date",
        },
        {
          path: "Tab 2",
          zhTitle: " Zh Tab 2",
          enTitle: "En Tab 2 ",
          icon: "element-el-icon-date",
        },
        {
          path: "Tab 3",
          zhTitle: " Zh Tab 3",
          enTitle: "En Tab 3 ",
          icon: "element-el-icon-date",
        },
        {
          path: "Tab 4",
          zhTitle: " Zh Tab 4",
          enTitle: "En Tab 4 ",
          icon: "element-el-icon-date",
        },
        {
          path: "Tab 5",
          zhTitle: " Zh Tab 5",
          enTitle: "En Tab 5 ",
          icon: "element-el-icon-date",
        },
        {
          path: "Tab 6",
          zhTitle: " Zh Tab 6",
          enTitle: "En Tab 6 ",
          icon: "element-el-icon-date",
        },
        {
          path: "Tab 7",
          zhTitle: " Zh Tab 7",
          enTitle: "En Tab 7 ",
          icon: "element-el-icon-date",
        },
        {
          path: "Tab 8",
          zhTitle: " Zh Tab 8",
          enTitle: "En Tab 8 ",
          icon: "element-el-icon-date",
        },
        {
          path: "Tab 9",
          zhTitle: " Zh Tab 9",
          enTitle: "En Tab 9 ",
          icon: "element-el-icon-date",
        },
        {
          path: "Tab 10",
          zhTitle: "Zh Tab 10",
          enTitle: "En Tab 10 ",
          icon: "element-el-icon-date",
        },
        {
          path: "Tab 11",
          zhTitle: "Zh Tab 11",
          enTitle: "En Tab 11 ",
          icon: "element-el-icon-date",
        },

        {
          path: "Tab 12",
          zhTitle: "Zh Tab 12",
          enTitle: "En Tab 12 ",
          icon: "element-el-icon-date",
        },
        {
          path: "Tab 13",
          zhTitle: "Zh Tab 13",
          enTitle: "En Tab 13 ",
          icon: "element-el-icon-date",
        },
        {
          path: "Tab 14",
          zhTitle: "Zh Tab 14",
          enTitle: "En Tab 14 ",
          icon: "element-el-icon-date",
        },
        {
          path: "Tab 15",
          zhTitle: "Zh Tab 15",
          enTitle: "En Tab 15 ",
          icon: "element-el-icon-date",
        },
        {
          path: "Tab 16",
          zhTitle: "Zh Tab 16",
          enTitle: "En Tab 16 ",
          icon: "element-el-icon-date",
        },
      ],
    };
  },
  //监听属性 类似于data概念
  computed: {
    ...mapGetters({
      language: "language",
    }),
  },

  //监控data中的数据变化
  watch: {
    menuOpen() {
      console.log(this.menuOpen);
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
    handleTabClick() {},
    handleTabRemove() {},

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
  width: 100%;
  overflow: hidden;
  .an-tabs {
    height: $base-tabs-bar-height;
    ::v-deep {
      .el-tabs__header {
        margin: 0;
        border: none;
      }
      .el-tabs__nav {
        display: flex;
        align-items: center;
        height: $base-tabs-bar-height;
        border: none;
      }
      .el-tabs__nav-next,
      .el-tabs__nav-prev {
        line-height: $base-tabs-bar-height;
      }
      .el-tabs__item {
        box-sizing: border-box;
        height: $base-tag-item-height;
        margin-right: 5px;
        line-height: $base-tag-item-height;
        color: $base-tag-item-textColor;
        background: $base-tag-item-background;
        border: none;
        border-radius: 2.5px;
        transition: padding 0.3s cubic-bezier(0.645, 0.045, 0.355, 1) !important;
        &:hover {
          padding: 0 13px;
          color: $base-tag-item-active-color;
        }
        &.is-active {
          padding: 0 13px;
          color: $base-tag-item-active-color;
        }
        &:hover:after,
        &.is-active:after {
          width: 100%;
          transition: all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1), border 0s, background 0s,
            color 0s, font-size 0s;
        }

        &:after {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          content: "";
          background-color: $base-tag-item-active-color;
        }
      }

      .el-tabs__content {
        display: none;
      }
    }
  }
}
</style>
