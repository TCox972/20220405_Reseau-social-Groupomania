import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate"

Vue.use(Vuex)


export default new Vuex.Store({
  state: {
    user: {}
  },
  getters: {
  },
  mutations: {
    //Ajout du token dans le state
    ADD_TOKEN (state, newauth) {
      state.user = newauth
    },
    //Suppression du token
    LOGOUT (state) {
      state.user = {}
    }
  },
  actions: {

  },
  plugins: [createPersistedState()],

  modules: {
  }
})
