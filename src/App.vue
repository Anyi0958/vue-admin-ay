<template>
  <div id="app">
    <router-view />
    <footer-bar v-if="footerCopy"></footer-bar>
  </div>
</template>
<script>
const defaultSettings = require("@/config/settings.js");

import FooterBar from "@/components/footer";
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
};
</script>
<style lang="scss">
#app {
  height: 100vh;
  font-family: Arial, serif;
}
</style>
