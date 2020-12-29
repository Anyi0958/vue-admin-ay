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
 * 可选默认参数值
 */
export const getStore = (name, optionalDefaultValue) => {
  let data = window.localStorage.getItem(name);
  if (!data) {
    return optionalDefaultValue ? optionalDefaultValue : "";
  }

  let v = "";
  try {
    v = JSON.parse(data);
  } catch (e) {
    v = data;
  }

  return v !== undefined ? v : optionalDefaultValue;
};

/**
 * 删除localStorage
 */

export const removeStore = name => {
  if (!name) return;
  window.localStorage.removeItem(name);
};

/**
 * 清空localStorage
 */

export const clearStore = () => {
  window.localStorage.clear();
};
