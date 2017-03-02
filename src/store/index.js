import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    loading: false,
    direction: 'forward',
  },

  actions: {
    FETCH_LOADING: ({commit, state}) => {
      return state.loading
    }
  },

  mutations: {
    SET_LOADING: (state, bool) => {
      state.loading = bool
    },

    SET_DIRECTION: (state, str) => {
      state.direction = str
    } 
  },

  getters: {
    loading (state, getters) {
      return state.loading
    },
    direction (state, getters) {
      return state.direction
    }
  }
})

export default store
