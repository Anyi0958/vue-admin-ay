<template>
  <div id="app">
    <router-view />
    <footer v-if="footerCopy">
      Copyright © 2020 安逸 All Rights Reserved. 备案号：
      <a
        href="http://www.beian.miit.gov.cn"
        target="_blank"
        style="color: #fff"
        one-link-mark="yes"
      >
        豫ICP备20009066号
      </a>
    </footer>
  </div>
</template>
<script>
const defaultSettings = require("@/config/settings.js");

export default {
  //监听属性 类似于data概念
  computed: {
    footerCopy() {
      return defaultSettings.footerCopy;
    },
  },
};
</script>
<style lang="scss">
#app {
  height: 100vh;
  footer {
    position: absolute;
    bottom: 30px;
    z-index: 10;
    width: 100%;
    height: 10px;
    color: #fff;
    text-align: center;
  }
}
</style>
