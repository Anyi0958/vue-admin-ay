const path = require("path");
const defaultSettings = require("./src/config/settings.js");

const resolve = dir => {
  return path.join(__dirname, dir);
};

let BASE_URL = "";

switch (process.env.NODE_ENV) {
  // 线上环境
  case "production":
    BASE_URL = "http://47.102.96.85:8888";
    console.info("项目运行环境：线上环境");
    break;

  // 开发环境
  case "development":
    BASE_URL = "http://47.102.96.85:8888";
    console.info("项目运行环境：开发环境");
    break;
  default:
    break;
}

module.exports = {
  // 开发以及部署时的URL
  publicPath: "/",

  // 生产环境构建文件的目录名
  outputDir: "dist",

  // 放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录。
  assetsDir: "static",

  // 开发环境每次保存时是否输出为eslint编译警告
  lintOnSave: process.env.NODE_ENV === "development",

  // 进行编译的依赖
  transpileDependencies: ["vue-echarts", "resize-detector", "zx-layouts"],

  devServer: {
    //模块热替换
    hot: true,
    //默认情况下，开发服务器将通过HTTP提供服务
    https: false,
    //服务器启动后打开浏览器
    open: true,
    //禁止显示诸如 Webpack 捆绑包信息之类的消息。 错误和警告仍将显示。
    noInfo: false,
    // 出现编译器错误或警告时，在浏览器中显示全屏覆盖
    overlay: {
      warnings: process.env.NODE_ENV === "development" ? true : false,
      errors: true,
    },
    // 项目本地启动地址
    host: "127.0.0.1",
    // 启动端口
    port: process.env.NODE_ENV === "development" ? 9999 : 80,
    //设置代理
    proxy: {
      "/xboot": {
        // 请求后端项目地址
        target: BASE_URL,
        ws: true,
      },
      "/foo": {
        target: "<other_url>",
      },
    },
  },

  configureWebpack() {
    return {
      name: defaultSettings.title || "vue-admin-ay",
      resolve: {
        alias: {
          "@": resolve("src"),
        },
      },
    };
  },

  chainWebpack(config) {
    // 它可以提高第一屏的速度，建议开启预加载
    config.plugin("preload").tap(() => [
      {
        rel: "preload",
        // 忽略runtime.js
        // https://github.com/vuejs/vue-cli/blob/dev/packages/@vue/cli-service/lib/config/app.js#L171
        fileBlacklist: [/\.map$/, /hot-update\.js$/, /runtime\..*\.js$/],
        include: "initial",
      },
    ]);

    // 当有很多页面时，会产生很多无意义的请求
    config.plugins.delete("prefetch");

    // set svg-sprite-loader
    config.module.rule("svg").exclude.add(resolve("src/icons")).end();
    config.module
      .rule("icons")
      .test(/\.svg$/)
      .include.add(resolve("src/icons"))
      .end()
      .use("svg-sprite-loader")
      .loader("svg-sprite-loader")
      .options({
        symbolId: "icon-[name]",
      })
      .end();

    config.when(process.env.NODE_ENV !== "development", config => {
      config
        .plugin("ScriptExtHtmlWebpackPlugin")
        .after("html")
        .use("script-ext-html-webpack-plugin", [
          {
            // `runtime` must same as runtimeChunk name. default is `runtime`
            inline: /runtime\..*\.js$/,
          },
        ])
        .end();
      config.optimization.splitChunks({
        chunks: "all",
        cacheGroups: {
          libs: {
            name: "chunk-libs",
            test: /[\\/]node_modules[\\/]/,
            priority: 10,
            chunks: "initial", // 只打包最初依赖的第三方
          },
          elementUI: {
            name: "chunk-elementUI", // 将elementUI拆分为单个包
            priority: 20, // the weight needs to be larger than libs and app or it will be packaged into libs or app
            test: /[\\/]node_modules[\\/]_?element-ui(.*)/, // in order to adapt to cnpm
          },
          commons: {
            name: "chunk-commons",
            test: resolve("src/components"), // can customize your rules
            minChunks: 3, //  minimum common number
            priority: 5,
            reuseExistingChunk: true,
          },
        },
      });
      // https:// webpack.js.org/configuration/optimization/#optimizationruntimechunk
      config.optimization.runtimeChunk("single");
    });
  },
};
