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
    if (data) {
      Cookies.set("userInfo", data);
    } else {
      Cookies.remove("userInfo");
    }
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
          }
          resolve(data);
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
          commit("SET_INFO", data.result);
          resolve(data);
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
      resolve();
    });
  },

  // dynamically modify permissions
  async changeRoles({ commit, dispatch }, role) {
    const token = role + "-token";

    commit("SET_TOKEN", token);
    setToken(token);

    const { roles } = await dispatch("getInfo");

    resetRouter();

    // generate accessible routes map based on roles
    const accessRoutes = await dispatch("permission/generateRoutes", roles, { root: true });
    // dynamically add accessible routes
    router.addRoutes(accessRoutes);

    // reset visited views and cached views
    dispatch("tagsView/delAllViews", null, { root: true });
  },
};

export default {
  state,
  mutations,
  actions,
};
