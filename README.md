# vue-admin-ay-template

**Demo:** <http://anitt.cn/>

> - Username: test
> - Password: 123456

## 特性

1.  基于 Vue.js 的企业级中后台开源集成方案
2.  基于 Vue 官方命令行工具 Vue CLI 3 脚手架搭建
3.  使用 Vue 官方核心插件 Vue Router, Vuex
4.  使用 Vue 官方建议的 Axios 插件进行 HTTP 操作
5.  采用 UI 组件库 iView element
6.  通过 Mock.js 插件拦截 Ajax 请求并生成随机数据

# 开发构建

### 目录结构

```bash
├── /public            # 静态文件
├── /src               # 源码目录
│ ├── /assets          # 静态资源
│ ├── /components      # 公共组件
│ ├── /layouts         # 布局组件
│ ├── /mock            # 数据模拟
│ ├── /router          # 路由配置
│ ├── /services        # 数据接口
│ ├── /store           # vuex状态管理
│ ├── /utils           # 工具库
│ ├── /views           # 路由组件(页面维度)
│ ├── App.vue          # 组件入口
│ ├── config.js        # 应用配置
│ └── main.js          # 应用入口
├── .editorconfig      # 定义代码格式
├── .eslintrc.js       # 定义JavaScript和JSX检查工具
├── .eslintignore      # 忽略检测
├── .env.development   # 开发环境
├── .env.production    # 生产环境
├── .env.release       # 预生产环境
├── .env.test          # 测试环境
├── .gitignore         # git忽视
├── .prettierrc.js     # js代码格式化规则
├── .stylelintrc.js   # 检查css的样式语法规则
├── babel.config.js    # ES6语法编译配置
├── LICENSE            # 版权信息
├── package.json       # 依赖包
├── postcss.config.js  # 将px转化成rem
├── README.md          # 项目文档
└── vue.config.js      # 项目配置
```

## vscode 插件

```bash
  Chinese (Simplified) Language Pack for Visual Studio Code
  Live Server
  Prettier - Code formatter
  EditorConfig for VS Code
  ESLint
  stylelint
  Vetur
  vscode-icons
  ESLint
```

## 快速开始

**Step 1,** 安装依赖:

```bash
  # 安装依赖
  yarn
  # 或
  npm i
```

**Step 2,** 开发:

```bash
yarn start
# 或
npm start
```

**Step 3,** 构建:

```bash
# 构建最小测试
yarn test
# 或
npm test

# 构建最小预发布
yarn release
# 或
npm run release

# 构建最小生产
yarn build
# 或
npm run build
```
