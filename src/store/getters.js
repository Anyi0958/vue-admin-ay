const getters = {
  // app
  navType: state => state.app.navType,
  // user
  token: state => state.user.token,
  userInfo: state => state.user.userInfo,
  AyVueAdmin(state, getters) {
    return state.AyVueAdmin + "getters";
  },
};
export default getters;
