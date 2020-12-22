// 自动获取焦点
const focus = {
  install(Vue, options) {
    Vue.directive("focus", {
      inserted(el, binding, vnode) {
        el.querySelector("input").focus();
      },
    });
  },
};

export default focus;
