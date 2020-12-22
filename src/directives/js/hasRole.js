// 角色权限  有其中一个就显示
// v-hasRole="'admin','test'"
// v-hasRole="['admin','test']"

const hasRole = {
  install(Vue, options) {
    Vue.directive("hasRole", {
      inserted(el, binding, vnode) {
        // 可操作权限组
        let roles = vnode.context.$route.meta.roles || [];
        // 目标权限组
        let value = binding.value;
        if (value) {
          if (roles && Object.prototype.toString.call(value) == "[object String]") {
            // 权限组为字符串
            value = value.split(",");
          }

          for (let v of value) {
            if (roles.includes(v)) {
              return;
            }
          }
        }
        el.parentNode.removeChild(el);
      },
    });
  },
};

export default hasRole;
