const path = require("path");

const resolve = dir => {
  return path.join(__dirname, dir);
};

const defaultSettings = require("./src/config/settings.js");
const CompressionPlugin = require("compression-webpack-plugin");

// const mockServer = () => {
//   if (process.env.NODE_ENV === "development") return require("./mock/mockServer.js");
//   else return "";
// };

let AN_BASE_URL = "";
let AN_PORT = "";

switch (process.env.NODE_ENV) {
  // 线上环境
  case "production":
    AN_BASE_URL = "http://47.102.96.85:8888";
    AN_PORT = 80;
    break;

  // 开发环境
  case "development":
    AN_BASE_URL = "http://47.102.96.85:8888";
    AN_PORT = 8081;
    break;
  default:
    break;
}

module.exports = {
  // 开发以及部署时的URL
  publicPath: defaultSettings.publicPath,

  // 生产环境构建文件的目录名
  outputDir: defaultSettings.outputDir,

  // 放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录。
  assetsDir: defaultSettings.assetsDir,

  // 开发环境每次保存时是否输出为eslint编译警告
  lintOnSave: defaultSettings.lintOnSave,

  // 进行编译的依赖
  transpileDependencies: defaultSettings.transpileDependencies,

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
    port: AN_PORT,
    // 这里写你调用接口的基础路径，来解决跨域，如果设置了代理，那你本地开发环境的axios的baseUrl要写为 '' ，即空字符串
    proxy: {
      ["/" + defaultSettings.base]: {
        // 请求后端项目地址
        target: AN_BASE_URL,
        ws: true,
      },
      "/foo": {
        target: "<other_url>",
      },
    },
    // before: mockServer(),
  },

  // 打包时不生成.map文件 避免看到源码
  productionSourceMap: false,

  configureWebpack() {
    return {
      // 浏览器显示源代码（默认不显示）
      devtool: process.env.NODE_ENV === "development" ? "source-map" : "",
      plugins: [
        // 启用gzip
        new CompressionPlugin({
          test: /\.js$|\.html$|\.css/, // 匹配文件
          threshold: 10240, // 对超过10k文件压缩
        }),
      ],
    };
  },

  chainWebpack(config) {
    // config.name(defaultSettings.title || "AY-Vue-Admin");

    config.plugin("html").tap(args => {
      args[0].title = defaultSettings.title || "AY-Vue-Admin";
      return args;
    });

    config.resolve.alias
      .set("@", resolve("src")) // key,value自行定义，比如.set('@@', resolve('src/components'))
      .set("_c", resolve("src/components"));

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

    /**
     * 删除懒加载模块的 prefetch preload，降低带宽压力
     * 当有很多页面时，会产生很多无意义的请求
     */
    config.plugins.delete("preload");
    config.plugins.delete("prefetch");

    // 清除警告
    config.performance.set("hints", false);

    // set svg-sprite-loader 可以将多个 svg 打包成 svg-sprite
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
          viewDesign: {
            name: "chunk-viewDesign", // 将viewDesign拆分为单个包
            priority: 20, // the weight needs to be larger than libs and app or it will be packaged into libs or app
            test: /[\\/]node_modules[\\/]_?view-design(.*)/, // in order to adapt to cnpm
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

  runtimeCompiler: true,
  productionSourceMap: false,
  css: {
    requireModuleExtension: true,
    sourceMap: true,
    loaderOptions: {
      // 全局引入scss文件
      scss: {
        /*sass-loader 8.0语法 */
        //prependData: '@import "~@/styles/variables.scss";',

        /*sass-loader 9.0写法*/
        additionalData(content, loaderContext) {
          const { resourcePath, rootContext } = loaderContext;
          const relativePath = path.relative(rootContext, resourcePath);
          if (relativePath.replace(/\\/g, "/") !== "src/styles/app.scss") {
            return '@import "~@/styles/app.scss";' + content;
          }
          return content;
        },
      },
    },
  },
};
