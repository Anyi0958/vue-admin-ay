module.exports = {
  // 超过最大值换行
  printWidth: 100,
  // 缩进字节数
  tabWidth: 2,
  // 缩进不使用tab，使用空格
  useTabs: false,
  // 句尾添加分号
  semi: true,
  // 使用单引号代替双引号
  singleQuote: false,
  //avoid：省略括号 (x) => {} 箭头函数参数只有一个时是否要有小括号。as-needed不省略
  arrowParens: "avoid",
  // 在对象，数组括号与文字之间加空格 "{ foo: bar }"
  bracketSpacing: true,
  // 不格式化
  disableLanguages: [],
  // 结尾是 \n \r \n\r auto
  endOfLine: "lf",
  //不让prettier使用eslint的代码格式进行校验
  eslintIntegration: false,
  htmlWhitespaceSensitivity: "ignore",
  //不让prettier使用stylelint的代码格式进行校验
  stylelintIntegration: false,
  // 在对象或数组最后一个元素后面是否加逗号（在ES5中加尾逗号）
  trailingComma: "es5",
  // 不让prettier使用tslint的代码格式进行校验
  tslintIntegration: false,
};
