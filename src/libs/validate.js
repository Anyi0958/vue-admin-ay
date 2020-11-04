// icon
export function isExternal(path) {
  return /^(https?:|mailto:|tel:)/.test(path);
}
/**
 * @param rule 验证规则（不少于6位）
 * @param value 需要验证的值
 * @param callback 回调函数
 */
import dayjs from "dayjs";

/**
 * 用户名
 */
export const validateusername = (rule, value, callback) => {
  if ("" == value) {
    callback(new Error("用户名不能为空"));
  } else {
    callback();
  }
};

/**
 * 密码
 */
export const validatePassword = (rule, value, callback) => {
  if (value.length < 6) {
    callback(new Error("密码长度不得小于6位"));
  } else {
    callback();
  }
};

/**
 * 手机号码格式验证
 */
export const validateMobile = (rule, value, callback) => {
  var reg = /^[1][3,4,5,6,7,8][0-9]{9}$/;
  if (!reg.test(value)) {
    callback(new Error("手机号格式错误"));
  } else {
    callback();
  }
};

/**
 * 身份证号码格式验证
 */
export const validateIDCard = (rule, value, callback) => {
  const reg = /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/;
  if (!reg.test(value)) {
    callback(new Error("身份证号码格式错误"));
  } else {
    callback();
  }
};

/**
 * 数字验证
 */
export const validateNumber = (rule, value, callback) => {
  const reg = "";
  if (value === "") {
    callback(new Error("不能为空"));
  } else if (Object.prototype.toString.call(value) !== "[object Number]") {
    callback(new Error("请输入"));
  } else {
    callback();
  }
};

/**
 * 日期验证
 */
export const validateDateTime = (rule, value, callback) => {
  var value = value ? dayjs(value).format("YYYY-MM-DD HH:mm:ss") : "";
  if (value == "" || value == undefined) {
    callback(new Error("不能为空"));
  } else if (value.length == 0) {
    callback(new Error("不能为空"));
  } else {
    for (var i of value) {
      if (i == "") {
        callback(new Error("不能为空"));
      }
    }
    callback();
  }
};

/**
 * 单选框验证
 */
export const validateRadio = (rule, value, callback) => {
  const reg = "";
  if (value === "") {
    callback(new Error("不能为空"));
  } else {
    callback();
  }
};

/**
 * 车牌
 */
export const validateCarNumber = (rule, value, callback) => {
  let reg = /^(([京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领][A-Z](([0-9]{5}[DF])|([DF]([A-HJ-NP-Z0-9])[0-9]{4})))|([京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领][A-Z][A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9挂学警港澳使领]))$/;
  if (value === "") {
    callback(new Error("不能为空"));
  } else if (!reg.test(value)) {
    callback(new Error("请输入正确的车牌号"));
  } else {
    callback();
  }
};

/**
 * 银行卡
 */
export const validateBankNumber = (rule, value, callback) => {
  let reg = /^([1-9]{1})(\d{14}|\d{18})$/;
  if (value === "") {
    callback(new Error("不能为空"));
  } else if (!reg.test(value)) {
    callback(new Error("请输入正确的银行卡号"));
  } else {
    callback();
  }
};
