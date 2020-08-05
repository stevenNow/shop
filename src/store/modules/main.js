const state = {
  hasAbandonedItems: true,
};

const mutations = {
  setHasAbandonedItems(state, hasAbandonedItems) {
    state.hasAbandonedItems = hasAbandonedItems;
  },
};

const actions = {};

const getters = {
  getHasAbandonedItems: (state) => state.hasAbandonedItems,
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
