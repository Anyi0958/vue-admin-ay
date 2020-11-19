<template>
  <div class="lang-icon">
    <el-dropdown @command="langChange">
      <span class="el-dropdown-link">
        <svg-icon icon-class="language" :style="{ color: color, 'font-size': size }" />
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item command="zh">简体中文</el-dropdown-item>
        <el-dropdown-item command="en">English</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
import Cookies from "js-cookie";

export default {
  name: "LangSwitch",
  props: {
    color: {
      type: String,
      default: "#fff",
    },
    size: {
      type: String,
      default: "28",
    },
  },
  methods: {
    langChange(v) {
      this.$i18n.locale = v;
      this.$store.dispatch("user/lang", v);
    },
  },
};
</script>

<style lang="scss">
.lang-icon {
  position: absolute;
  top: 2vh;
  right: 1.5vw;
  z-index: 60;
  cursor: pointer;
}
</style>
