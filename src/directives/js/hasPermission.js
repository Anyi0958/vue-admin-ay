// 按钮权限  有其中一个就显示
// v-has="'edit','add'"
// v-has="['edit','add']"

const hasPermission = {
  install(Vue, options) {
    Vue.directive("has", {
      inserted(el, binding, vnode) {
        // 可操作权限组
        let permTypes = vnode.context.$route.meta.permTypes || [];
        // 目标权限组
        let value = binding.value;
        if (value) {
          if (permTypes && Object.prototype.toString.call(value) == "[object String]") {
            // 权限组为字符串
            value = value.split(",");
          }

          for (let v of value) {
            if (permTypes.includes(v)) {
              return;
            }
          }
        }
        el.parentNode.removeChild(el);
      },
    });
  },
};

export default hasPermission;
