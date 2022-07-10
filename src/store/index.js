import { createStore } from 'vuex'

export default createStore({
  state: {
    users: []
  },
  getters: {
  },
  mutations: {
    ADD_USER(state, user) {
      state.users.push(user)
    }
  },
  actions: {
  },
  modules: {
  }
})
