import { login, userInfo } from "@/api/user";
import Cookies from "js-cookie";
import setting from "@/config/settings";
let tokenName = setting.tokenName;

const state = {
  token: Cookies.get(tokenName),
  language: Cookies.get("language"),
  userInfo: "",
};

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token;
    if (token) {
      Cookies.set(tokenName, token);
    } else {
      Cookies.remove(tokenName);
    }
  },
  SET_LANG: (state, data) => {
    state.language = data;
    if (data) {
      Cookies.set("language", data);
    } else {
      Cookies.remove("language");
    }
  },
  SET_INFO: (state, data) => {
    state.userInfo = data;
  },
};

const actions = {
  lang({ commit, state }, data) {
    commit("SET_LANG", data);
  },

  // user login
  login({ commit }, userInfo) {
    const { username, password } = userInfo;
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
            commit("SET_INFO", data.result);
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
      commit("SET_TOKEN", "");
      commit("SET_INFO", "");
      localStorage.clear();
      Cookies.remove(tokenName);
      resolve();
    });
  },
};

export default {
  state,
  mutations,
  actions,
};
