import Vue from "vue";
import setting from "./settings";
//此部分引入的是我们所编写的mockjs文档
process.env.NODE_ENV === "development" && require("../../Mock/index.js");

// 按需引入ui组件以及全局配置
import "@/ui/element";
import "@/ui/iview";

// 引入icon
import "@/icons";

// 轻量级时间格式  使用 https://www.cnblogs.com/cjrfan/p/9154539.html
import dayjs from "dayjs";
Vue.prototype.dayjs = dayjs;

// 网络请求
import {
  request,
  getRequest,
  postRequest,
  putRequest,
  deleteRequest,
  importRequest,
  uploadFileRequest,
  getRequestWithNoToken,
  postRequestWithNoToken,
  allRequest,
} from "@/libs/axios";

import { setStore, getStore, removeStore } from "@/libs/storage";

Vue.prototype.request = request;
Vue.prototype.getRequest = getRequest;
Vue.prototype.postRequest = postRequest;
Vue.prototype.putRequest = putRequest;
Vue.prototype.deleteRequest = deleteRequest;
Vue.prototype.importRequest = importRequest;
Vue.prototype.uploadFileRequest = uploadFileRequest;
Vue.prototype.getRequestWithNoToken = getRequestWithNoToken;
Vue.prototype.postRequestWithNoToken = postRequestWithNoToken;
Vue.prototype.allRequest = allRequest;

Vue.prototype.setStore = setStore;
Vue.prototype.getStore = getStore;
Vue.prototype.removeStore = removeStore;

if (setting.donation) {
  console.log(
    `%c 欢迎使用 ${setting.title} %c ${
      process.env.NODE_ENV == "production" ? "生产环境" : "测试环境"
    } ${process.env.NODE_ENV} %c 基于 Vue v${Vue.version}  %c`,
    "background:#35495e ; padding: 1px; border-radius: 3px 0 0 3px;  color: #fff",
    "background:#41b883 ; padding: 1px; border-radius: 3px 0 0 3px;  color: #fff",
    "background:#E6A23C ; padding: 1px; border-radius: 0 3px 3px 0;  color: #fff",
    "background:transparent"
  );
}
