import { createStore } from 'vuex';

const counterModule = {
  namespaced: true,
  state() {
    return { counter: 0 }
  },
  mutations: {
    increment(state) {
      state.counter++;
    },
    increase(state, payload) {
      state.counter += payload.value;
    },
  },
  actions: {
    increment(context) {
      setTimeout(() => {
        context.commit('increment');
      }, 2000);
    },
    increase(context, payload) {
      context.commit('increase', payload);
    }
  },
  getters: {
    finalCounter(state) {
      return state.counter * 2;
    },
    normalizedCounter(/*state*/_, getters) {
      const finalCounter = getters.finalCounter;
      if(finalCounter < 0)
        return 0;

      if(finalCounter > 100)
        return 100;

      return finalCounter;
    },
  }
  
};

const store = createStore({
  modules: {
    numbers: counterModule,
  },
  state() {
    return {
      userLogged: false
    };
  },
  mutations: {
    login(state) {
      state.userLogged = true;
    },
    logout(state) {
      state.userLogged = false;
    }
  },
  getters: {
    
    userLogged(state) {
      return state.userLogged;
    }
  },
  actions: {
    
    login(context) {
      context.commit('login');
    },
    logout(context) {
      context.commit('logout');
    },
  }
})

export default store;