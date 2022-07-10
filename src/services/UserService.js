<!-- All API calls are stored here. -->
import axios from 'axios'

const apiClient = axios.create({
    baseURL: 'http://localhost:3000',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})

export default {
    getUsers() {
        return apiClient.get('/users')
    },
    postUser(user) {
        return apiClient.post('users', user)
    },
    deleteUser (id) {
        return apiClient.delete(`/users/${id}`)
    }
}
