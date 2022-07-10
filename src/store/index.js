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
    },
      DELETE_USER(state, id) {
          state.users.splice(id, 1)
      },
  },
  actions: {
    createUser({ commit }, user) {
      UserService.postUser(user)
          .then(() => {
            commit('ADD_USER', user)
          })
          .catch(function (error) {
            throw(error)
          })
    },
    fetchUsers({ commit }) {
     return UserService.getUsers()
          .then(response => {
            commit('SET_USERS', response.data)
          })
          .catch(error => {
            throw(error)
          })
    },
      deleteUser({ commit }, user) {
          let id = user.id
          UserService.deleteUser(id)
              .then(() => {
                  commit('DELETE_USER', id)
                  this.dispatch('fetchUsers')
              })
              .catch(function (error) {
                  throw(error)
              })
      }
  },
  modules: {
  }
})
