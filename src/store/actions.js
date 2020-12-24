const actions = {
  //  context 具有store相同方法和属性
  //  context.state context.getters  context.commit  context.dispatch
  AyVueAdmin2(context, data) {
    console.log(context, data);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        context.commit("AyVueAdmin1", data);
        resolve(context.state.AyVueAdmin);
      }, 1000);
    });
  },

  async AyVueAdmin3({ state, getters, commit, dispatch }, products) {
    await dispatch("AyVueAdmin2", products);
  },
};
export default actions;
