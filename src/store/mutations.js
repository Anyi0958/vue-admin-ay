const mutations = {
  AyVueAdmin1(state, data) {
    console.log("根节Mutations", state, data);
    state.AyVueAdmin = data.name;
  },
};
export default mutations;
