import Vue from 'vue';
import Vuex from 'vuex';

const SET_VALUE = 'SET_VALUE';
const SET_INPUT_VALUE = 'SET_INPUT_VALUE';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    value: '',
    inputValue: '',
  },
  mutations: {
    [SET_VALUE](state, payload: { value: string }) {
      state.value = payload.value;
    },
    [SET_INPUT_VALUE](state, payload: { value: string }) {
      state.inputValue = payload.value;
    },
  },
  actions: {},
});
