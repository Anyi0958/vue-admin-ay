/**
 * 存储localStorage
 */
export const setStore = (name, content) => {
  if (!name) return;
  if (typeof content !== "string") {
    content = JSON.stringify(content);
  }
  window.localStorage.setItem(name, content);
};

/**
 * 获取localStorage
 */
export const getStore = (name, key) => {
  if (!name) return;
  let v = window.localStorage.getItem(name);
  if (v == null) {
    if (key) {
      return {};
    }
    return "";
  }
  // key 为 all 返回 完整对象
  // 否则 返回对应的 值
  if (key == "all") {
    v = JSON.parse(v);
  } else if (key) {
    v = JSON.parse(v)[key];
  }
  return v;
};

/**
 * 删除localStorage
 */
export const removeStore = name => {
  if (!name) return;
  window.localStorage.removeItem(name);
};
