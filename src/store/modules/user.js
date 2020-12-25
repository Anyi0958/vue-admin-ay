import setting from "@/config/settings";
import { setStore, getStore, removeStore } from "@/libs/storage";
import { login, userInfo, logout } from "@/api/user";

let anTokenName = setting.tokenName;
let anLanguage = setting.language;
let anUserInfo = setting.userInfo;

const user = {
  state: {
    token: getStore(anTokenName),
    language: getStore(anLanguage),
    userInfo: getStore(anUserInfo, "all"),
  },

  getters: {
    token: state => data => {
      console.log("vuex user Getters 参数", state, data);
      return state.token + data;
    },
  },

  mutations: {
    SET_TOKEN: (state, data) => {
      state.token = data;
      if (data) {
        setStore(anTokenName, data);
      } else {
        removeStore(anTokenName);
      }
    },

    SET_LANGUAGE: (state, data) => {
      state.language = data;
      if (data) {
        setStore(anLanguage, data);
      } else {
        removeStore(anLanguage);
      }
    },

    SET_USERINFO: (state, data) => {
      state.userInfo = data;
      if (data) {
        setStore(anUserInfo, data);
      } else {
        removeStore(anUserInfo);
      }
    },
  },

  actions: {
    // 修改语言
    language({ commit, state }, data) {
      commit("SET_LANGUAGE", data);
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
