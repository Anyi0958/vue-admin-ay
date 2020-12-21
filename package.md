# package.json 文档说明

## vue-cli-service  
```bash

用法：vue-cli-service serve [options] [entry]

选项：

  --open    在服务器启动时打开浏览器
  --copy    在服务器启动时将 URL 复制到剪切版
  --mode    指定环境模式 (默认值：development)
  --host    指定 host (默认值：0.0.0.0)
  --port    指定 port (默认值：8080)
  --https   使用 https (默认值：false)

```


## vue-cli-service build  
```bash

用法：vue-cli-service build [options] [entry|pattern]

选项：

  --mode        指定环境模式 (默认值：production)
  --dest        指定输出目录 (默认值：dist)
  --modern      面向现代浏览器带自动回退地构建应用
  --target      app | lib | wc | wc-async (默认值：app)
  --name        库或 Web Components 模式下的名字 (默认值：package.json 中的 "name" 字段或入口文件名)
  --no-clean    在构建项目之前不清除目标目录
  --report      生成 report.html 以帮助分析包内容
  --report-json 生成 report.json 以帮助分析包内容
  --watch       监听文件变化
```

## npm install [-S|--save|-D|--save-dev|-O|--save-optional] [-E|--save-exact] [--dry-run]  

<br>

#### 安装所有项目中需要的依赖包
> - npm install

<br>

#### 查看所有已经安装的模块
> - npm list 或 npm ll 或 npm la 或 npm ls

<br>

#### 卸载已经安装的模块 options参数意思与安装时候的意思一样
> - npm uninstall packagename [options]

<br>

#### 默认会安装最新的版本安装包  
> - npm install packagename    
  
<br>

#### 安装指定版本安装包            
> - npm install packagename@3.9.1  
  
<br>

#### 安装包信息将加入到dependencies（生产阶段的依赖）  
> - npm install packagename --save 或 npm install packagename -S      
  
<br>

#### 安装包信息将加入到devDependencies（开发阶段的依赖），所以开发阶段一般使用它  
> - npm install packagename --save-dev 或 npm install packagename -D        
  
<br>

#### 安装包信息将加入到optionalDependencies（可选阶段的依赖） 
> - npm install packagename --save-optional 或 npm install packagename -O   
  
<br>

#### 精确安装指定模块版 dependencies字段里每个模块版本号前面的^不见
> - npm install packagename --save-exact 或 npm install packagename -E      

<br>

#### 列出所有已经过时了的模块
> - npm outdated 

<br>

#### 更新已经安装的模块(或全局的模块)
> - npm update [-g]

<br>

#### 查看某条命令的详细帮助
> - npm help '命令'

<br>

## 其他

### 快速删除文件npm模块
> - 安装 npm install rimraf -g 
> - 使用 rimraf node_modules

<br>

### 快速更新package依赖包
> - 安装 npm install npm-check-updates -g 
> - 检测 ncu -u

<br>

### 代码规范
> - eslint  
> - eslint-plugin-prettier  
> - eslint-plugin-vue
> - prettier  
> - stylelint
> - stylelint-config-prettier
> - stylelint-config-recess-order

<br>

### elementUi依赖包
> - element-ui  -  npm i element-ui -S
> - 按需引入组件  -  npm install babel-plugin-component -D
> - sass,sass-loader  -  npm install -D sass sass-loader

<br>

### elementUi依赖包
> - element-ui  -  npm i element-ui -S
> - 按需引入组件  -  npm install babel-plugin-component -D (配合.babelre文件使用) 
> - sass,sass-loader  -  npm install -D sass sass-loader

<br>

### iview依赖包
> - view-design  -  npm install view-design --save
> - 按需引入组件 -  npm babel-plugin-import -D  (配合.babelre文件使用) 
> - less,less-loader  -  npm install -D less less-loader

<br>

### Mock模拟数据
> - mockjs  -  npm install mockjs --save

<br>

### plop 自动化构建工具
> - plop  -  npm install plop --save
> - 入口文件 根目录创建 plopfile.js
> - 参考链接 https://blog.csdn.net/zemprogram/article/details/104146833

<br>

## packagejson  

```bash
{
  "name": "vue-admin-ay-template",
  "version": "0.1.0",
  "author": "AY<anyi0958@163.com>",
  "private": false,
  "scripts": {
     "init": "npm install || npm install -g --registry=https://registry.npm.taobao.org", // 下载依赖
    "dev": "vue-cli-service serve",   //启动
    "inspect": "vue-cli-service inspect",
    "build": "vue-cli-service build",   //打包
    "build:report": "vue-cli-service build --report",    // 打包并生成 report.html 以帮助分析包内容
    "lint": "vue-cli-service lint",     //修复
    "lint:style": "stylelint-config-prettier-check",  //修复
    "clear": "rimraf node_modules && rimraf dist && npm install",   //删除依赖包并重新下载，删除dist
    "update": "ncu -u&&npm i",  // 更新依赖包
    "update:globle": "ncu -g --concurrency 10 --timeout 80000", // 全局更新依赖包 最大请求  并发10 
    "push": "start ./push.sh",        //推送项目到github和gitter
    "deploy": "start ./deploy.sh",     //推送打包到github和gitter
    "preview": "node build/index.js --preview"
  },
  // npm insatll --save ***（npm insatll -S）    下载到 生产环境 依赖下
  // npm insatll --save-dev（npm insatll -D）      下载到 开发环境 依赖下
  // 生产环境使用
  "dependencies": {
    "axios": "^0.20.0",
    "body-parser": "^1.19.0", // Mock用于解析请求
    "core-js": "^3.6.5",  
    "chokidar": "^3.4.2", // 文件变化监听
    "dayjs": "^1.9.1",  // 一个轻量级类 moment.js API 时间库
    "element-ui": "^2.13.2",
    "js-cookie": "^2.2.1",
    "mockjs": "^1.1.0", 
    "nprogress": "^0.2.0",  // 进度条基于 Vue 的 nprogress
    "vue": "^2.6.11",
    "vue-i18n": "^8.22.0",
    "vue-router": "^3.2.0",
    "vuex": "^3.4.0"
  },
  // 开发环境使用
  // element 使用 sass , iview 使用 less
  "devDependencies": {
    "@vue/cli-plugin-babel": "~4.5.0",
    "@vue/cli-plugin-eslint": "~4.5.0", //代码规范
    "@vue/cli-plugin-router": "~4.5.0",
    "@vue/cli-plugin-vuex": "~4.5.0",
    "@vue/cli-service": "~4.5.0",
    "@vue/compiler-sfc": "^3.0.0-0",
    "@vue/eslint-config-prettier": "^6.0.0",
    "babel-eslint": "^10.1.0",
    //借助 babel-plugin-component babel-plugin-import，我们可以只引入需要的组件，以达到减小项目体积的目的。
    "babel-plugin-component": "^1.1.1", //element
    "babel-plugin-import": "^1.13.0",  //iview
    "compression-webpack-plugin": "^5.0.2",
    "eslint": "^6.8.0",
    "eslint-plugin-prettier": "^3.1.4",
    "eslint-plugin-vue": "^6.2.2",
    "prettier": "^2.1.1",
    "less": "^2.7.3",
    "less-loader": "^4.1.0",
    "plop": "^2.7.4",
    "prettier": "^2.1.1",
    "sass": "^1.27.0",
    "sass-loader": "^10.0.3",
    "script-ext-html-webpack-plugin": "2.1.3",
    "stylelint": "^13.7.0",
    "stylelint-config-prettier": "^8.0.2",
    "stylelint-config-recess-order": "^2.1.0",
    "svg-sprite-loader": "4.1.3", //svg加载优化 可以将多个 svg 打包成 svg-sprite
    "svgo": "1.2.0", // svg优化 去掉亢余信息 如注释
    "vue-template-compiler": "^2.6.12"
  },

  "eslintConfig": {
    "root": true,
    "env": {
      "node": true
    },
    "extends": [
      "plugin:vue/essential",
      "eslint:recommended"
    ],
    "parserOptions": {
      "parser": "babel-eslint"
    },
    "rules": {}
  },

  "browserslist": [
    "> 1%",     // 兼容全球使用率大于 1%的浏览器
    "last 2 versions", //兼容每个浏览器的最近两个版本
    "not dead"  //  24个月内没有官方支持或更新的浏览器。现在是IE 10，IE_Mob 11，BlackBerry 10，BlackBerry 7， Samsung 4和OperaMobile 12.1。
  ],
  //入口文件
  "main": "babel.config.js",

  "license": "ISC",

  "lint-staged": {
    "src/**/*.{js,vue}": [
      "eslint --fix",
      "git add"
    ]
  },

  "husky": {
    "hooks": {
      "pre-commit": "lint-staged"
    }
  },
  // 版本要求
  "engines": {
    "node": ">=8.9",
    "npm": ">= 3.0.0"
  },
  //关键词
  "keywords": [
    "vue",
    "admin",
    "admin-template"
  ],
  //地址
  "repository": {
    "type": "git",
    "url": "git+https://github.com/Anyi0958/vue-admin-ay.git"
  }
}
```
