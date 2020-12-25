const defaultSettings = require("@/config/settings.js");
// 统一请求路径前缀
let base = defaultSettings.base;

import { request } from "@/libs/axios";

// 注册
export const regist = params => {
  return request({
    url: "/user/regist",
    params: params,
    method: "post",
    dataType: "form",
    hasToken: false,
  });
};

// 登陆
export const login = params => {
  return request({
    url: "/login",
    params: params,
    method: "post",
    dataType: "form",
    hasToken: false,
  });
};

// 获取用户登录信息
export const userInfo = params => {
  return request({
    url: "/user/info",
    params: params,
    method: "post",
    hasToken: true,
  });
};

// 退出
export const logout = params => {
  return request({
    url: "/logout",
    params: params,
    method: "post",
    dataType: "form",
    hasToken: false,
  });
};
