// 测试环境 development
// 生产环境 production

module.exports = {
  // 开发以及部署时的URL
  publicPath: "",

  // 生产环境构建文件的目录名
  outputDir: "an",

  // 放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录。
  assetsDir: "static",

  // 开发环境每次保存时是否输出为eslint编译警告
  lintOnSave: true,

  // 进行编译的依赖
  transpileDependencies: ["vue-echarts"],

  //  标题 （包括初次加载雪花屏的标题 页面的标题 浏览器的标题 登录标题）
  title: "AY-Vue-Admin",

  //登录 注册页显示 logo / title
  loginHeardType: "title",

  // 统一网络请求前缀
  base: "/xboot",

  // 配后端数据的默认接收方式 json/form
  // application/json;charset=UTF-8或者application/x-www-form-urlencoded;charset=UTF-8
  contentType: "form",

  // 使用Mock
  useMock: true,

  // token存储变量
  tokenName: "accessToken",

  // language存储变量
  language: "language",

  // userInfo存储变量
  userInfo: "userInfo",

  // app 设置参数 存储变量
  appName: "AnApp",

  //是否显示页面底部版权信息
  footerCopy: process.env.NODE_ENV == "development",

  //是否显示右上角github图标
  githubCorner: process.env.NODE_ENV == "development",

  //ui类型( element iview )
  uiType: "element",

  //ui尺寸( default small  large)
  uiSize: "default",

  // 当前语言（默认中文）
  lang: "en",
  // 可选语言
  langList: ["zh", "en"],

  //是否显示顶部进度条
  progressBar: true,

  //消息框消失时间
  messageDuration: 3000,

  //最长请求时间
  requestTimeout: 5000,

  // 路由模式，可选值为 history 或 hash
  routerMode: "history",

  //不经过token校验的路由
  routesWhiteList: ["Login", "Register", "About", "Icon", "/404", "/401"],

  //操作正常code，支持String、Array、int多种类型
  successCode: [200, 0],

  //登录失效code
  invalidCode: 402,

  //无权限code
  noPermissionCode: 401,

  /////////////////

  //缓存路由的最大数量
  keepAliveMaxNum: 99,

  //加载时显示文字
  loadingText: "正在加载中...",

  //token失效回退到登录页时是否记录本次的路由
  recordRoute: true,

  //是否显示logo，不显示时设置false，显示时请填写remixIcon图标名称，暂时只支持设置remixIcon
  logo: "vuejs-fill",

  //是否国定头部 固定fixed 不固定noFixed
  header: "fixed",

  //横纵布局 horizontal vertical
  layout: "vertical",

  //是否开启主题配置按钮
  themeBar: true,

  //是否显示多标签页
  tagsBar: true,

  //是否显示骨架屏
  skeleton: false,

  //是否显示在页面高亮错误
  errorLog: ["development", "test", "production"],

  //是否开启登录拦截
  loginInterception: true,

  //是否开启登录RSA加密
  loginRSA: true,

  //是否依据mock数据生成webstorm HTTP Request请求文件
  httpRequestFile: false,

  //intelligence和all两种方式，前者后端权限只控制permissions不控制view文件的import（前后端配合，减轻后端工作量），all方式完全交给后端前端只负责加载
  authentication: "intelligence",

  //vertical布局时是否只保持一个子菜单的展开
  uniqueOpened: true,

  //vertical布局时默认展开的菜单path，使用逗号隔开建议只展开一个
  defaultOopeneds: ["/vab"],

  //需要加loading层的请求，防止重复提交
  debounce: ["doEdit"],

  //是否显示终端donation打印
  donation: true,
};
