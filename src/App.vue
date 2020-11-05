<template>
  <div id="app">
    <router-view />
    <footer-bar v-if="footerCopy"></footer-bar>
  </div>
</template>
<script>
const defaultSettings = require("@/config/settings.js");

import FooterBar from "@/components/FooterBar";
import Cookies from "js-cookie";
import { mapState } from "vuex";

export default {
  components: {
    FooterBar,
  },
  //监听属性 类似于data概念
  computed: {
    footerCopy() {
      return defaultSettings.footerCopy;
    },
    ...mapState({
      lang: state => state.user.userInfo.lang,
    }),
  },
  watch: {
    lang() {
      Cookies.set("language", this.lang);
    },
  },
  mounted() {
    this.$notify({
      title: this.$t("login.welcome"),
      offset: 60,
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
