import { login, userInfo } from "@/api/user";
import Cookies from "js-cookie";

const state = {
  token: Cookies.get("accessToken"),
  userInfo: "",
};

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token;
    if (token) {
      Cookies.set("accessToken", token);
    } else {
      Cookies.remove("accessToken");
    }
  },
  SET_INFO: (state, data) => {
    state.userInfo = data;
  },
};

const actions = {
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
      Cookies.remove("accessToken");
      resolve();
    });
  },
};

export default {
  state,
  mutations,
  actions,
};
