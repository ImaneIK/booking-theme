import Vue from 'vue';
import Vuex from 'vuex';
import state from '../template-core/store/state';

Vue.use(Vuex);

const createStore = () => {
  return new Vuex.Store({
    state: () => ({
      ...state,
      customValue: 'value',
      currentRouteName: ''
    }),
    mutations: {
      setCurrentRouteName(state, routeName) {
        state.currentRouteName = routeName;
      }
    },
    actions: {},
    getters: {}
  });
};

export default createStore;
