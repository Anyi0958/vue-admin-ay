const getters = {
  // app
  navType: state => state.app.navType,
  // user
  token: state => state.user.token,
  userInfo: state => state.user.userInfo,
  AyVueAdmin: state => data => {
    console.log("vuex Getters接收参数", data);
    return state.AyVueAdmin + data;
  },
};
export default getters;
