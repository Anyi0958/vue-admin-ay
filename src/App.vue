<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
export default {
  components: {},
  watch: {},
  mounted() {
    if (this.$route.name == "Login")
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
<style lang="scss"></style>
