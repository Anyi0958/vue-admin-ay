let transformRemoveConsolePlugin = [];
if (process.env.NODE_ENV === "production") {
  transformRemoveConsolePlugin.push("transform-remove-console");
}

module.exports = {
  plugins: [
    [
      // element 组件按需引入
      "component",
      {
        libraryName: "element-ui",
        styleLibraryName: "theme-chalk",
      },
    ],
    // iview 组件按需引入
    [
      "import",
      {
        libraryName: "view-design",
        libraryDirectory: "src/components",
      },
    ],
    ...transformRemoveConsolePlugin,
  ],
  presets: [
    // https://github.com/vuejs/vue-cli/tree/master/packages/@vue/babel-preset-app
    "@vue/cli-plugin-babel/preset",
  ],
  env: {
    development: {
      // babel-plugin-dynamic-import-node plugin only does one thing by converting all import() to require().
      // 将所有import()转换为require()
      // 当你有大量的页面时，这个插件可以显著提高热更新的速度。
      // https://panjiachen.github.io/vue-element-admin-site/guide/advanced/lazy-loading.html
      plugins: ["dynamic-import-node"],
    },
  },
};
