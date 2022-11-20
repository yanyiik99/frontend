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
    yield put(ACTION.loadUsersError(error.response.data));
  }
}

// POST DATA TURAH YUNI
function* onPostUserStartAsync({payload}) {
  try {
    // Consume API
    const response = yield call(API.postUserApi, payload);
    // MENGIRIMKAN DATA KE API TIDAK KE REDUX
    yield put(ACTION.postUserSuccess(response.data));
    // CONSOLE LOG
    console.log(response);
  } catch (error) {
    // Jika Terjadi Error taruh data di ACTION error
    yield put(ACTION.postUserError(error.response.data));
  }
}


// DELETE DATA TURAH YUNI
function* onDeleteUserStartAsync(userId) {
  try {
    // Consume API
    const response = yield call(API.deleteUserApi, userId);
    // MENGIRIMKAN DATA KE API TIDAK KE REDUX
    yield put(ACTION.deleteUserSuccess(userId));

  } catch (error) {
    // Jika Terjadi Error taruh data di ACTION error
    yield put(ACTION.deleteUserError(error.response.data));
  }
}





// FUNCTION ONLOADING WITH TAKEEVERY & TAKELATES >>>>>>>>
function* onLoadUsers(){
  yield takeEvery(CONST.LOAD_USERS_START, onLoadUsersStartAsync);
}

function* onPostUser() {
  yield takeLatest(CONST.POST_USER_START, onPostUserStartAsync);
}

// FUNCTION ONLOADING WITH JUST TAKE >>>>>>>>
function* onDeleteUser() {
  while (true) {
    const { payload: userId } = yield take(CONST.DELETE_USER_START);
    yield call(onDeleteUserStartAsync, userId);
  }
}


// FORK ONLOADING
const userSagas = [fork(onLoadUsers), fork(onPostUser), fork(onDeleteUser)]

// EXPORT ALL
export default function* rootSaga() {
  yield all([...userSagas])
}