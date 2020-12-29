const getters = {
  // app
  sideBarUnfold: state => state.app.sideBarUnfold,
  menuList: state => state.app.menuList,

  // user
  token: state => state.user.token,
  language: state => state.user.language,
  userInfo: state => state.user.userInfo,

  // getters 第二个参数示例
  AyVueAdmin: state => data => {
    console.log("vuex Getters接收参数", data);
    return state.AyVueAdmin + data;
  },
};
export default getters;
