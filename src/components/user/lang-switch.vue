<template>
  <div class="lang-icon">
    <el-dropdown @command="langChange">
      <span class="el-dropdown-link">
        <svg-icon icon-class="language" style="color: #fff" />
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
  mounted() {
    Cookies.set("ces", { a: 2, b: 2 });
    console.log(JSON.parse(Cookies.get("ces")).a);
  },
  methods: {
    langChange(v) {
      this.$i18n.locale = v;
      Cookies.set("language", v);
    },
  },
};
</script>

<style lang="scss">
.lang-icon {
  position: fixed;
  top: 2vh;
  right: 1.5vw;
  cursor: pointer;
}
</style>
