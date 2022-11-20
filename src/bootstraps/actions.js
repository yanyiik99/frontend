import * as CONST from './constatns'


// GET DATA USERS
export const loadUsersStart = () => ({
  type: CONST.LOAD_USERS_START,
})
export const loadUsersSuccess = (users) => ({
  type: CONST.LOAD_USERS_SUCCESS,
  payload: users
})
export const loadUsersError = (error) => ({
  type: CONST.LOAD_USERS_ERROR,
  payload: error,
})


// POST DATA USER : note tidak perlu mengirimkan data ke redux hanya post ke API saja
export const postUserStart = (user) => ({
  type: CONST.POST_USER_START,
  payload: user
})
export const postUserSuccess = () => ({
  type: CONST.POST_USER_SUCCESS,
})
export const postUserError = (error) => ({
  type: CONST.POST_USER_ERROR,
  payload: error,
})


// DELETE DATA USER : note tidak perlu mengirimkan data ke redux hanya post ke API saja
export const deleteUserStart = (userId) => ({
  type: CONST.DELETE_USER_START,
  payload: userId
})
export const deleteUserSuccess = (userId) => ({
  type: CONST.DELETE_USER_SUCCESS,
  payload: userId
})
export const deleteUserError = (error) => ({
  type: CONST.DELETE_USER_ERROR,
  payload: error,
})
