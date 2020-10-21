//axios 使用文档  https://www.kancloud.cn/yunye/axios/234845
import axios from "axios";

import { getStore, setStore } from "./storage";

import { router } from "../router/index";

import { Message as iviewMessage } from "view-design";
import { Message } from "element-ui";
import setting from "../config/settings";
let $_Message = setting.uiType == "element" ? Message : iviewMessage;

import Cookies from "js-cookie";

// 统一请求路径前缀
let base = "/ay";
// 超时设定
axios.defaults.timeout = 20000;

// 添加请求拦截器
axios.interceptors.request.use(
  config => {
    // 在发送请求之前做些什么
    return config;
  },
  err => {
    // 对请求错误做些什么
    $_Message.error("请求超时");
    return Promise.resolve(err);
  }
);

// 添加响应拦截器
axios.interceptors.response.use(
  response => {
    // 对响应数据做点什么
    const data = response.data;
    // 根据返回的code值来做不同的处理(和后端约定)
    switch (data.code) {
      case 401:
        // 未登录 清除已登录状态
        Cookies.set("userInfo", "");
        setStore("accessToken", "");
        if (router.history.current.name != "login") {
          if (data.message !== null) {
            $_Message.error(data.message);
          } else {
            $_Message.error("未知错误，请重新登录");
          }
          router.push("/login");
        }
        break;
      case 403:
        // 没有权限
        if (data.message !== null) {
          $_Message.error(data.message);
        } else {
          $_Message.error("未知错误");
        }
        break;
      case 500:
        // 错误
        if (data.message !== null) {
          $_Message.error(data.message);
        } else {
          $_Message.error("未知错误");
        }
        break;
      default:
        return data;
    }
    return data;
  },
  err => {
    // 对响应错误,返回状态码不为200时候的错误处理
    $_Message.error(err.toString());
    return Promise.resolve(err);
  }
);

/**
 * token验证的请求
 * @param {*} method   请求方法，必填
 * @param {*} url      请求地址，必填
 * @param {*} params   请求参数
 * @param {*} type     请求数据类型，默认form
 * @param {*} auth     是否携带凭证，默认携带
 */
export const request = obj => {
  let { method, url, params, type, auth } = obj;
  let accessToken = getStore("accessToken");
  let headers = {
    "Content-Type": "application/x-www-form-urlencoded",
  };
  if (type) {
    headers["Content-Type"] =
      type == "form"
        ? "application/x-www-form-urlencoded"
        : type == "json"
        ? "application/json;charset=UTF-8"
        : "";
  }
  if (auth === undefined || auth) {
    headers["accessToken"] = accessToken;
  }

  return axios({
    method: method,
    url: `${base}${url}`,

    // `params` 是即将与请求一起发送的 URL 参数
    // 必须是一个无格式对象(plain object)或 URLSearchParams 对象
    params: method == "get" ? params : "",

    // `data` 是作为请求主体被发送的数据
    data: method != "get" ? {} : params,

    // `responseType` 表示服务器响应的数据类型，可以是 'arraybuffer', 'blob', 'document', 'json', 'text', 'stream'
    responseType: type == "blob" ? "blob" : "json",

    // `transformRequest` 允许在向服务器发送前，修改请求数据
    // 只能用在 'PUT', 'POST' 和 'PATCH' 这几个请求方法
    // 后面数组中的函数必须返回一个字符串，或 ArrayBuffer，或 Stream
    transformRequest: [
      function (data) {
        // 对 data 进行任意转换处理
        if (type == "json") return JSON.stringify(data);
        let ret = "";
        for (let it in data) {
          ret += encodeURIComponent(it) + "=" + encodeURIComponent(data[it]) + "&";
        }
        ret = ret.substring(0, ret.length - 1);
        return ret;
      },
    ],

    // `transformResponse` 在传递给 then/catch 前，允许修改响应数据
    transformResponse: [
      function (data) {
        // 对 data 进行任意转换处理
        return JSON.parse(data);
      },
    ],

    // `headers` 是即将被发送的自定义请求头
    headers: headers,
  });
};

/**
 * token验证的请求
 * @param {*} url
 * @param {*} params
 * @param {*} type(json form blob)
 */

export const getRequest = (url, params) => {
  let accessToken = getStore("accessToken");
  return axios({
    method: "get",
    url: `${base}${url}`,
    params: params,
    headers: {
      accessToken: accessToken,
    },
  });
};

export const postRequest = (url, params, type) => {
  let accessToken = getStore("accessToken");
  if (!type) type = "form";
  return axios({
    method: "post",
    url: `${base}${url}`,
    data: params,
    responseType: type == "blob" ? "blob" : "",
    transformRequest: [
      function (data) {
        if (type == "json") return JSON.stringify(data);
        let ret = "";
        for (let it in data) {
          ret += encodeURIComponent(it) + "=" + encodeURIComponent(data[it]) + "&";
        }
        ret = ret.substring(0, ret.length - 1);
        return ret;
      },
    ],
    headers: {
      "Content-Type":
        type == "form"
          ? "application/x-www-form-urlencoded;charset=UTF-8"
          : type == "json"
          ? "application/json;charset=UTF-8"
          : "",
      accessToken: accessToken,
    },
  });
};

export const putRequest = (url, params, type) => {
  let accessToken = getStore("accessToken");
  if (!type) type = "form";
  return axios({
    method: "put",
    url: `${base}${url}`,
    data: params,
    responseType: type == "blob" ? "blob" : "",
    transformRequest: [
      function (data) {
        if (type == "json") return JSON.stringify(data);
        let ret = "";
        for (let it in data) {
          ret += encodeURIComponent(it) + "=" + encodeURIComponent(data[it]) + "&";
        }
        ret = ret.substring(0, ret.length - 1);
        return ret;
      },
    ],
    headers: {
      "Content-Type":
        type == "form"
          ? "application/x-www-form-urlencoded;charset=UTF-8"
          : type == "json"
          ? "application/json;charset=UTF-8"
          : "",
      accessToken: accessToken,
    },
  });
};

export const deleteRequest = (url, params) => {
  let accessToken = getStore("accessToken");
  return axios({
    method: "delete",
    url: `${base}${url}`,
    params: params,
    data: params,
    headers: {
      accessToken: accessToken,
    },
  });
};

export const importRequest = (url, params) => {
  let accessToken = getStore("accessToken");
  return axios({
    method: "post",
    url: `${base}${url}`,
    data: params,
    headers: {
      accessToken: accessToken,
    },
  });
};

export const uploadFileRequest = (url, params) => {
  let accessToken = getStore("accessToken");
  return axios({
    method: "post",
    url: `${base}${url}`,
    params: params,
    headers: {
      accessToken: accessToken,
    },
  });
};

/**
 * 无需token验证的请求 避免旧token过期导致请求失败
 * @param {*} url
 * @param {*} params
 * @param {*} type(json form blob)
 */
export const getRequestWithNoToken = (url, params) => {
  return axios({
    method: "get",
    url: `${base}${url}`,
    params: params,
  });
};

export const postRequestWithNoToken = (url, params, type) => {
  return axios({
    method: "post",
    url: `${base}${url}`,
    data: params,
    headers: {
      "Content-Type":
        type == "form"
          ? "application/x-www-form-urlencoded;charset=UTF-8"
          : type == "json"
          ? "application/json;charset=UTF-8"
          : "",
    },
  });
};

// 并发多个请求
// axios.all([getUserAccount(), getUserPermissions()])
//   .then(axios.spread(function (acct, perms) {
//     两个请求现在都执行完成
//   }));
export const allRequest = async params => {
  let res = [];
  await axios.all(params).then(
    axios.spread(function () {
      res = [...arguments];
      return res;
    })
  );
  return res;
};
