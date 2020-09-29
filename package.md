## package.json 文档说明

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

```bash
{
  "name": "vue-admin-ay-template",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "init": "npm install && vue-cli-service serve", // 下载依赖
    "serve": "vue-cli-service serve",   //启动
    "inspect": "vue-cli-service inspect",
    "build": "vue-cli-service build",   //打包
    "build:report": "vue-cli-service build --report",    // 打包并生成 report.html 以帮助分析包内容
    "lint": "vue-cli-service lint",     //修复
    "lint:style": "stylelint-config-prettier-check",  //修复
    "clear": "rimraf node_modules && rimraf dist && npm install",   //删除依赖包并重新下载，删除dist
    "push": "start ./push.sh",        //推送项目到github和gitter
    "deploy": "start ./deploy.sh"     //推送打包到github和gitter
  },
  "dependencies": {
    "axios": "^0.20.0",
    "core-js": "^3.6.5",   
    "vue": "^2.6.11",
    "vue-router": "^3.2.0",
    "vuex": "^3.4.0"
  },
  "devDependencies": {
    "@vue/cli-plugin-babel": "~4.5.0",
    "@vue/cli-plugin-eslint": "~4.5.0", //代码规范
    "@vue/cli-plugin-router": "~4.5.0",
    "@vue/cli-plugin-vuex": "~4.5.0",
    "@vue/cli-service": "~4.5.0",
    "@vue/compiler-sfc": "^3.0.0-0",
    "@vue/eslint-config-prettier": "^6.0.0",
    "babel-eslint": "^10.1.0",
    "eslint": "^6.8.0",
    "eslint-plugin-prettier": "^3.1.4",
    "eslint-plugin-vue": "^6.2.2",
    "prettier": "^2.1.1",
    "stylelint": "^13.7.0",
    "stylelint-config-prettier": "^8.0.2",
    "stylelint-config-recess-order": "^2.1.0",
    "vue-template-compiler": "^2.6.12",
    "script-ext-html-webpack-plugin": "2.1.3"
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
    "> 1%",
    "last 2 versions",
    "not dead"
  ]
}
```
