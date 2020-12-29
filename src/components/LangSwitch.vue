<template>
  <div class="lang-icon">
    <el-dropdown @command="headleLang">
      <span class="el-dropdown-link">
        <an-icon type="svg-language" :color="color" :size="size" />
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item
          v-for="item in languageList"
          :key="item.value"
          :disabled="language == item.value"
          :command="item.value"
        >
          {{ item.label }}
        </el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { languageList } from "@/config/settings";
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
    ...mapGetters({
      language: "language",
    }),
    languageList() {
      return languageList;
    },
  },
  mounted() {},
  methods: {
    headleLang(v) {
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
