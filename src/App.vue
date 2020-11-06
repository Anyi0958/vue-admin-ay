<template>
  <div id="app">
    <router-view />
    <footer-bar v-if="footerCopy"></footer-bar>
  </div>
</template>
<script>
const defaultSettings = require("@/config/settings.js");

import FooterBar from "@/components/FooterBar";

export default {
  components: {
    FooterBar,
  },
  //监听属性 类似于data概念
  computed: {
    footerCopy() {
      return defaultSettings.footerCopy;
    },
  },
  watch: {},
  mounted() {
    if (this.$route.name == "login")
      this.$notify({
        title: this.$t("login.welcome"),
        offset: 60,
        duration: defaultSettings.messageDuration,
        message:
          "这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案",
      });
  },
};
</script>
<style lang="scss">
#app {
  height: 100vh;
  font-family: Arial, serif;
}

/* 设置滚动条的样式 */
::-webkit-scrollbar {
  width: 10px;
  background-color: #fff;
}

/* 滚动槽 */
::-webkit-scrollbar-track {
  border-radius: 10px;
}

/* 滚动条滑块 */
::-webkit-scrollbar-thumb {
  background: #ddd;
  border-radius: 10px;
}
</style>
