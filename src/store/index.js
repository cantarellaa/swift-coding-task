import { createStore } from 'vuex'
import UserService from "@/services/UserService.js"

export default createStore({
  state: {
    users: []
  },
  getters: {
  },
  mutations: {
    ADD_USER(state, user) {
      state.users.push(user)
    },
    SET_USERS(state, users) {
      state.users = users
    }
  },
  actions: {
    createUser({ commit }, user) {
      UserService.postUser(user)
          .then(() => {
            commit('ADD_USER', user)
          })
          .catch(function (error) {
            console.log(error)
          })
    },
    fetchUsers({ commit }) {
      UserService.getUsers()
          .then(response => {
            commit('SET_USERS', response.data)
          })
          .catch(error => {
            console.log(error)
          })
    }
  },
  modules: {
  }
})
