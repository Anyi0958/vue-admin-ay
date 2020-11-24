const getters = {
  // app
  navType: state => state.app.navType,
  // user
  token: state => state.user.token,
  userInfo: state => state.user.userInfo,
};
export default getters;
