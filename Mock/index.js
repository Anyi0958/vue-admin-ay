let Mock = require("mockjs");
import Cookies from "js-cookie";
const defaultSettings = require("@/config/settings.js");
// 统一请求路径前缀
let base = defaultSettings.base;

// 获取 mock.Random 对象
const Random = Mock.Random;

//使用mockjs模拟数据
Mock.mock(base + "/login", (req, res) => {
  console.log(req, res);

  let params = {};
  res = {
    code: 200,
    message: "success",
    result: [],
    success: true,
  };
  if (req.body) {
    req.body.split("&").map(item => {
      let v = item.split("=");
      params[v[0]] = v[1];
    });
  }

  if (params.username == "admin" && params.password == "123456") {
    res.message = "登录成功";
    Cookies.set("userInfo", params);
  } else {
    res.message = "用户名或密码错误";
    res.code = 500;
    res.success = false;
  }
  //当post或get请求到/api/data路由时Mock会拦截请求并返回上面的数据

  return res;
});
