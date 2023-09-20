import { createStore } from "vuex";
import createPersistedState from 'vuex-persistedstate';

const store = createStore({
  state: {
    user: {
      data: {},
      token: null,
    },
  },
  getters: {},
  actions: {
    user(context, user) {
      context.commit('user', user);
    }
  },
  mutations: {
    user(state, user) {
      state.user = user
    }
  },
  modules: {},
  plugins: [createPersistedState({
    paths: ['user']
  })],
});

export default store;
