import { createStore } from 'vuex';

import cartModule from './modules/cart';
import productModules from './modules/products';

const store = createStore({
  modules: {
    cartModule,
    productModules
  },

  state() {
    return {
      isLoggedIn: false,
    }
  },
  mutations: {
    login(state) {
      state.isLoggedIn = true;
    },
    logout(state) {
      state.isLoggedIn = false;
    },
  },
  actions: {
    login(context) {
      context.commit('login');
    },
    logout(context, payload) {
      const router = payload;
      router.push('/');
      context.commit('logout');
    },
  },
  getters: {
    isAuthenticated(state) {
      return state.isLoggedIn;
    }
  }
})

export default store;

