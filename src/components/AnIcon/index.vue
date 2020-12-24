/* 组件示例
<An-icon type="el-icon-edit" class-name="class" color="red" size="30" />
*/

<template>
  <!-- element icon -->
  <i
    v-if="iconType == 'element'"
    :style="{ color: color, 'font-size': size + 'px' }"
    :class="svgClass"
  ></i>
  <!-- svg icon -->
  <div v-else-if="iconType == 'svg'" style="display: inline-block">
    <div
      v-if="isExternal"
      :style="styleExternalIcon"
      class="svg-external-icon svg-icon"
      v-on="$listeners"
    />
    <svg
      v-else
      :class="svgClass"
      aria-hidden="true"
      :style="{ color: color, 'font-size': size }"
      v-on="$listeners"
    >
      <use :xlink:href="iconName" />
    </svg>
  </div>
</template>

<script>
// doc: https://panjiachen.github.io/vue-element-admin-site/feature/component/svg-icon.html#usage
import { isExternal } from "@/libs/validate";

export default {
  name: "AnIcon",
  props: {
    color: {
      type: String,
      default: "",
    },
    size: {
      type: [String, Number],
      default: "20",
    },
    type: {
      type: String,
      required: false,
      default: "",
    },
    className: {
      type: String,
      default: "",
    },
  },
  computed: {
    iconType() {
      if (this.type.indexOf("element-") != -1) {
        return "element";
      } else if (this.type.indexOf("svg-") != -1) {
        return "svg";
      }
      return false;
    },
    isExternal() {
      return isExternal(this.type);
    },
    iconName() {
      return `#icon-${this.type.replace(/svg-/g, "")}`;
    },
    svgClass() {
      if (this.type.indexOf("element-") != -1) {
        return this.type.replace(/element-/g, " ") + this.className;
      } else if (this.type.indexOf("svg-") != -1) {
        return "svg-icon " + this.className;
      }
      return false;
    },
    styleExternalIcon() {
      return {
        mask: `url(${this.type}) no-repeat 50% 50%`,
        "-webkit-mask": `url(${this.type}) no-repeat 50% 50%`,
      };
    },
  },
};
</script>

<style scoped>
.svg-icon {
  width: 1em;
  height: 1em;
  overflow: hidden;
  vertical-align: -0.15em;
  fill: currentColor;
}

.svg-external-icon {
  display: inline-block;
  background-color: currentColor;
  mask-size: cover !important;
}
</style>
