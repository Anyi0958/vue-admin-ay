/*
 * @Author: your name
 * @Date: 2020-10-10 11:03:47
 * @LastEditTime: 2020-12-22 18:13:47
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \vue-admin-ay-template\src\lang\index.js
 */
import Vue from "vue";
import VueI18n from "vue-i18n";

import enElement from "element-ui/lib/locale/lang/en";
import zhElement from "element-ui/lib/locale/lang/zh-CN";

import enIview from "view-design/dist/locale/en-US";
import zhIview from "view-design/dist/locale/zh-CN";

import enLocale from "../lang/en";
import zhLocale from "../lang/zh";

import ElementLocale from "element-ui/lib/locale";
import { locale } from "view-design";

import setting from "../config/settings";
import { setStore, getStore, removeStore } from "@/libs/storage";

let lang = (getStore("language") || setting.lang).toLowerCase();

lang = setting.langList.includes(lang) ? lang : setting.langList[0];
setStore("language", lang);

// 设置语言
Vue.use(VueI18n);
const messages = {
  // en: Object.assign(enLocale, enElement,enIview),
  // zh: Object.assign(zhLocale, zhElement,zhIview),
  en: {
    ...enLocale,
    ...enElement,
    ...enIview,
  },
  zh: {
    ...zhLocale,
    ...zhElement,
    ...zhIview,
  },
};

//iview国际化设置
locale(messages[lang]);

const i18n = new VueI18n({
  locale: lang, // set locale
  messages, // set locale messages
});

ElementLocale.i18n((key, value) => i18n.t(key, value));

export default i18n;
