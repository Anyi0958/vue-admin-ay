<template>
  <div class="lang-icon">
    <el-dropdown @command="langChange">
      <span class="el-dropdown-link">
        <svg-icon icon-class="language" :style="{ color: color, 'font-size': size }" />
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item :disabled="language == 'zh'" command="zh">简体中文</el-dropdown-item>
        <el-dropdown-item :disabled="language == 'en'" command="en">English</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
import Cookies from "js-cookie";
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";
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
  computed: {
    ...mapState({
      language: state => state.user.language,
    }),
  },
  methods: {
    langChange(v) {
      this.$i18n.locale = v;
      this.$store.dispatch("user/language", v);
    },
  },
};
</script>

<style lang="scss" scoped>
.el-dropdown {
  display: inline !important;
}
</style>
