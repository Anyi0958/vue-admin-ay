import Vue from "vue";
import setting from "./settings";

//  启用 mockjs
setting.useMock && require("../../Mock/index.js");

//  global css
import "@/styles/index.scss";

//  引入自定义指令
import "@/directives/index";

//  按需引入ui组件以及全局配置
//  import "@/ui/iview";
import "@/ui/element";

//  引入 an-icon 全局组件
import "@/icons";

//  轻量级时间格式
//  使用 https://www.cnblogs.com/cjrfan/p/9154539.html
import dayjs from "dayjs";
Vue.prototype.dayjs = dayjs;

// 网络请求
import { request, allRequest } from "@/libs/axios";

Vue.prototype.request = request;
Vue.prototype.allRequest = allRequest;

//  封装 localStorage
//  注意 getStore 第二参数可选 可返回对象或对象对应的键值
import { setStore, getStore, removeStore } from "@/libs/storage";

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
