import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";
import axios from "axios";

const state = {
  user: {
    data: {},
    token: null,
  },
  notes: [],
  categories: [],
};

const getters = {
  user: (state) => state.user,
  categories: (state) => state.categories,
  notes: (state) => state.notes,
};

const actions = {
  async addUser({ commit }, user) {
    await commit("setUser", user);
  },

  async removeUser({ commit }) {
    const user = {
      data: {},
      token: null,
    };
    await commit("setUser", user);
  },

  async categories({ commit }, categories) {
    await commit("setCategories", categories);
  },

  async notes({ commit }, notes) {
    await commit("setNotes", notes);
  },
};

const mutations = {
  setUser: (state, user) => {
    state.user = user;
  },
  setNotes: (state, notes) => {
    state.notes = notes;
  },
  setCategories: (state, categories) => {
    state.categories = categories;
  },
};

const store = createStore({
  state,
  getters,
  actions,
  mutations,
  modules: {},
  plugins: [
    createPersistedState({
      paths: ["user", "notes"],
    }),
  ],
});

export default store;
