/* 组件示例
<svg-icon icon-class="el-icon-edit" class-name="class" color="red" size="30" />
*/

<template>
  <i
    v-if="iconType == 'element'"
    :style="{ color: color, 'font-size': size + 'px' }"
    :class="svgClass"
  ></i>
  <div
    v-else-if="isExternal"
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
</template>

<script>
// doc: https://panjiachen.github.io/vue-element-admin-site/feature/component/svg-icon.html#usage
import { isExternal } from "@/libs/validate";

export default {
  name: "SvgIcon",
  props: {
    color: {
      type: String,
      default: "",
    },
    size: {
      type: String,
      default: "28",
    },
    iconClass: {
      type: String,
      required: true,
    },
    className: {
      type: String,
      default: "",
    },
  },
  computed: {
    iconType() {
      if (this.iconClass.indexOf("el-icon") != -1) {
        return "element";
      }
      return "svg";
    },
    isExternal() {
      return isExternal(this.iconClass);
    },
    iconName() {
      return `#icon-${this.iconClass}`;
    },
    svgClass() {
      if (this.iconClass.indexOf("el-icon") != -1) {
        return this.iconClass + " " + this.className;
      } else {
        return "svg-icon " + this.className;
      }
    },
    styleExternalIcon() {
      return {
        mask: `url(${this.iconClass}) no-repeat 50% 50%`,
        "-webkit-mask": `url(${this.iconClass}) no-repeat 50% 50%`,
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
