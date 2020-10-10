// export default url => () => import(`@/views/${url}.vue`);

export default url => resolve => require([`@/views/${url}.vue`], resolve);

// 原因：webpack 版本问题，webpack4中动态import不支持变量方式
