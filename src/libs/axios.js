//axios 使用文档  https://www.kancloud.cn/yunye/axios/234845
import axios from "axios";
import { router } from "@/router";
import store from "@/store";
// import { Message as iviewMessage } from "view-design";
import { Message } from "element-ui";
import setting from "@/config/settings";
import Cookies from "js-cookie";

// let uType = Cookies.get("uiType") || setting.uiType;
// let $_Message = uType == "element" ? Message : iviewMessage;
let $_Message = Message;

// 统一请求路径前缀
let base = setting.base;

let tokenName = setting.tokenName;
let token = "";

// 超时设定
axios.defaults.timeout = setting.requestTimeout;

// 添加请求拦截器
axios.interceptors.request.use(
  config => {
    // 在发送请求之前做些什么

    // 设置请求头 token  数据类型
    token = store.getters.token;
    let dataType = config.dataType;

    if (dataType == "json") {
      config.headers["Content-Type"] = "application/json;charset=UTF-8";
    } else if (dataType == "form") {
      config.headers["Content-Type"] = "application/x-www-form-urlencoded;charset=UTF-8";
    } else if (dataType == "blob") {
      config["responseType"] = "blob";
    }

    if (config.hasToken) {
      config.headers[tokenName] = token;
    }

    delete config.dataType;
    delete config.hasToken;

    if (setting.donation) console.log("请求数据", config);

    //这里会过滤所有为空、0、false的key，如果不需要请自行注释
    // if (config.data)
    //   config.data = Vue.prototype.$baseLodash.pickBy(
    //     config.data,
    //     Vue.prototype.$baseLodash.identity
    //   );

    return config;
  },
  err => {
    if (setting.donation) console.log("请求错误", err);
    // 对请求错误做些什么
    $_Message({
      showClose: true,
      message: `请求超时`,
      type: "error",
    });
    return Promise.resolve(err);
  }
);

// 添加响应拦截器
axios.interceptors.response.use(
  response => {
    if (setting.donation) console.log("响应数据", response.data);
    // 对响应数据做点什么
    const data = response.data;
    // 根据返回的code值来做不同的处理(和后端约定)
    switch (data.code) {
      case setting.invalidCode:
        // 未登录 清除已登录状态
        Cookies.remove(tokenName);

        if (router.history.current.name != "login") {
          router.push("/login");
        }

        if (data.message !== null) {
          $_Message({
            showClose: true,
            message: data.message,
            type: "error",
          });
        } else {
          $_Message({
            showClose: true,
            message: "未知错误，请重新登录",
            type: "error",
          });
        }
        break;
      case setting.noPermissionCode:
        // 没有权限
        if (data.message !== null) {
          $_Message({
            showClose: true,
            message: data.message,
            type: "error",
          });
        } else {
          $_Message({
            showClose: true,
            message: "没有权限",
            type: "error",
          });
        }
        break;
      case 500:
        // 错误
        if (data.message !== null) {
          $_Message({
            showClose: true,
            message: data.message,
            type: "error",
          });
        } else {
          $_Message({
            showClose: true,
            message: "未知错误",
            type: "error",
          });
        }
        break;
      default:
        return data;
    }
    return data;
  },
  err => {
    // 对响应错误,返回状态码不为200时候的错误处理
    // let { message } = err;
    // if (message === "Network Error") {
    //   message = "后端接口连接异常";
    // }
    // if (message.includes("timeout")) {
    //   message = "后端接口请求超时";
    // }
    // if (message.includes("Request failed with status code")) {
    //   const code = message.substr(message.length - 3);
    //   message = "后端接口" + code + "异常";
    // }
    // $_Message.error(message || `后端接口未知异常`, "error");

    if (setting.donation) console.log("响应错误", err);
    $_Message({
      showClose: true,
      message: err.toString(),
      type: "error",
    });
    return Promise.resolve(err);
  }
);

/**
 * token验证的请求
 * @param {*} method    请求方法，必填
 * @param {*} url       请求地址，必填
 * @param {*} params    请求参数
 * @param {*} dataType  请求数据类型(form json blob...)，默认 根据 setting.js 配置
 * @param {*} hasToken  是否携带凭证，默认携带
 */

export const request = ({
  method = "get",
  url,
  params,
  dataType = setting.contentType,
  hasToken = true,
}) => {
  if (setting.donation) console.log("axios接收参数", arguments);

  return axios({
    dataType: dataType.toLowerCase(),
    hasToken: hasToken,

    method: method,
    url: `${base}${url}`,

    // `params` 是即将与请求一起发送的 URL 参数
    // 必须是一个无格式对象(plain object)或 URLSearchParams 对象
    params: ["put", "post", "patch"].includes(method.toLowerCase()) ? null : params,

    // `data` 是作为请求主体被发送的数据
    // 只适用于这些请求方法 'PUT', 'POST', 和 'PATCH'
    // 在没有设置 `transformRequest` 时，必须是以下类型之一：
    // - string, plain object, ArrayBuffer, ArrayBufferView, URLSearchParams
    data: ["put", "post", "patch"].includes(method.toLowerCase()) ? params : null,

    // `headers` 是即将被发送的自定义请求头
    headers: {},

    // `responseType` 表示服务器响应的数据类型，
    // 可以是 'arraybuffer', 'blob', 'document', 'json', 'text', 'stream'
    responseType: ["blob"].includes(dataType.toLowerCase()) ? "blob" : "json",

    // `transformRequest` 允许在向服务器发送前，修改请求数据
    // 只能用在 'PUT', 'POST' 和 'PATCH' 这几个请求方法
    // 后面数组中的函数必须返回一个字符串，或 ArrayBuffer，或 Stream
    transformRequest: [
      function (data) {
        // 对 data 进行任意转换处理
        if (dataType.toLowerCase() == "json") return JSON.stringify(data);
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
        try {
          return JSON.parse(data);
        } catch (err) {
          console.log("axios异常", err);
          return data;
        }
      },
    ],
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
