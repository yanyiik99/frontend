import * as API from './apis';
import * as CONST from './constatns';
import {put, call, all, take, delay, fork, takeEvery, takeLatest} from 'redux-saga/effects';
import * as ACTION from './actions';

// FUNCTION LOADING >>>>>>>>>

// GET DATA TURAH YUNI
function* onLoadUsersStartAsync(){
  try {
    // Consume API
    const response = yield call(API.getUsersApi);
    //Delay 500ms seperti function setTimeout
    yield delay(500);
    // Menaruh data yang didapatkan di ACTION
    yield put(ACTION.loadUsersSuccess(response.data));
    // CONSOLE LOG
    console.log(response.data);
  } catch (error){
    // Jika Terjadi Error taruh data di ACTION error
    yield put(ACTION.loadUsersError(error.message));
    console.log(error.message)
  }
}

// POST DATA TURAH YUNI
function* onPostUserStartAsync({user}) {
  try {
    // Consume API
    const response = yield call(API.postUserApi, user);
    // MENGIRIMKAN DATA KE API TIDAK KE REDUX
    yield put(ACTION.postUserSuccess(response?.data));
    // CONSOLE LOG
    console.log(response);
  } catch (error) {
    // Jika Terjadi Error taruh data di ACTION error
    yield put(ACTION.postUserError(error?.message));
    console.log(error)
  }
}


// FUNCTION ONLOADING WITH TAKEEVERY & TAKELATES >>>>>>>>
function* onLoadUsers(){
  yield takeEvery(CONST.LOAD_USERS_START, onLoadUsersStartAsync);
}

function* onPostUser() {
  yield takeLatest(CONST.POST_USER_START, onPostUserStartAsync);
}

// FORK ONLOADING
const userSagas = [fork(onLoadUsers), fork(onPostUser)]

// EXPORT ALL
export default function* rootSaga() {
  yield all([...userSagas])
}