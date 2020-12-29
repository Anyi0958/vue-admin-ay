import { setLang } from "@/lang";
import {
  tokenName as anTokenName,
  langName as anLangName,
  userInfo as anUserInfo,
} from "@/config/settings";
import { setStore, getStore, removeStore } from "@/libs/storage";
import { login, userInfo, logout } from "@/api/user";

const user = {
  state: {
    token: "",
    language: "",
    userInfo: "",
  },

  mutations: {
    SET_TOKEN: (state, data) => {
      state.token = data;
      setStore(anTokenName, data);
    },

    SET_LANGUAGE: (state, data) => {
      state.language = data;
      setStore(anLangName, data);
    },

    SET_USERINFO: (state, data) => {
      state.userInfo = data;
      setStore(anUserInfo, data);
    },
  },

  actions: {
    // 修改语言
    language({ commit, state }, data) {
      return new Promise((resolve, reject) => {
        setLang(data)
          .then(lang => {
            commit("SET_LANGUAGE", lang);
            resolve();
          })
          .catch(error => {
            reject(error);
          });
      });
    },

    // user login
    login({ commit, state }, data) {
      const { username, password } = data;
      return new Promise((resolve, reject) => {
        login({ username: username.trim(), password: password })
          .then(response => {
            let data = response;
            if (data.success) {
              commit("SET_TOKEN", data.result);
              resolve();
            } else {
              reject(error);
            }
          })
          .catch(error => {
            reject(error);
          });
      });
    },

    // get user info
    getInfo({ commit, state }) {
      return new Promise((resolve, reject) => {
        userInfo()
          .then(response => {
            let data = response;
            if (data.success) {
              commit("SET_USERINFO", data.result);
              resolve(data);
            } else {
              reject(error);
            }
          })
          .catch(error => {
            reject(error);
          });
      });
    },

    // user logout
    logout({ commit, state }) {
      return new Promise((resolve, reject) => {
        logout()
          .then(response => {
            let data = response;
            if (data.success) {
              commit("SET_TOKEN", "");
              commit("SET_USERINFO", "");
              localStorage.clear();
              resolve(data);
            } else {
              reject(error);
            }
          })
          .catch(error => {
            reject(error);
          });
      });
    },
  },
};

export default user;
