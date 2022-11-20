import axios from "axios";

const BaseApi = axios.create({
  baseURL: 'http://localhost:8200'
})

export const getUsersApi = () => {
  return BaseApi.get('/users');
}

export const postUserApi = (user) => {
  return BaseApi.post('/users', user)
}


export const deleteUserApi = (userId) => {
  return BaseApi.delete(`/users/${userId}`)
}

