let Mock = require("mockjs");
const defaultSettings = require("@/config/settings.js");
import Cookies from "js-cookie";

// 统一请求路径前缀
let base = defaultSettings.base;

// 获取 mock.Random 对象
const Random = Mock.Random;

const bodyParmas = data => {
  let params = {};

  data.split("&").map(item => {
    let v = item.split("=");
    params[v[0]] = v[1];
  });
  return params;
};

let defaultResult = {
  code: 200,
  message: "success",
  result: [],
  success: true,
};

let userInfoInit = () => {
  if (Cookies.get("mockUser")) {
    return JSON.parse(Cookies.get("mockUser"));
  } else {
    return [
      {
        username: "admin",
        password: "123456",
      },
    ];
  }
};

let userInfo = userInfoInit();

// 用户登录
Mock.mock(base + "/login", (req, res) => {
  let params = {};
  res = defaultResult;

  if (req.body)params = bodyParmas(req.body);

  let loginStatus = false;

  userInfo.map(item => {
    if (item.username == params.username && item.password == params.password) {
      loginStatus = true;
    }
  });

  if (loginStatus) {
    res.message = "登录成功";
    res.result = "accessToken";
  } else {
    res.message = "用户名或密码错误";
    res.code = 500;
    res.success = false;
  }

  return res;
});

// 用户注册
Mock.mock(base + "/user/regist", (req, res) => {
  let params = {};
  res = res = defaultResult;

  if (req.body)params = bodyParmas(req.body);

  let registStatus = true;

  userInfo.map(item => {
    if (item.username == params.username) {
      registStatus = false;
    }
  });

  if (registStatus) {
    res.message = "注册成功";
    userInfo.push({
      username: params.username,
      password: params.password,
    });
    Cookies.set("mockUser", JSON.stringify(userInfo));
  } else {
    res.message = "用户名已存在";
    res.code = 500;
    res.success = false;
  }

  return res;
});

// 用户信息
Mock.mock(base + "/user/info", (req, res) => {
  res = res = res = defaultResult;

  if (Cookies.get(defaultSettings.tokenName)) {
    res.result = {
      lang: "zh",
      name: "Ay-Vue",
      avatar: "",
      roles: ["admin"],
      menuData: "",
      pageOpenedList: [],
      userInfo: {
        name: "@name",
      },
    };
  } else {
    res.message = "登录已失效";
    res.code = defaultSettings.invalidCode;
    res.success = false;
  }

  return res;
});
