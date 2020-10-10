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
locale(messages[setting.uiLang]);

const i18n = new VueI18n({
  locale: setting.uiLang, // set locale
  messages, // set locale messages
});

ElementLocale.i18n((key, value) => i18n.t(key, value));

export default i18n;
