import { PayloadAction } from '@reduxjs/toolkit';
import employeeAPi from 'api/auth-api';
import { push } from 'connected-react-router';
import { LoginResponseType } from 'models';
import { call, delay, fork, put, take } from 'redux-saga/effects';
import { authActions, LoginPayLoad } from './authSlice';

function* handleLogin(payload: LoginPayLoad) {
  try {
    yield delay(1000);
    const response: LoginResponseType = yield call(employeeAPi.login(payload));
      localStorage.setItem('access_token', payload.email)
    yield put(authActions.loginSuccess(payload))
    yield put(push('/dashbroad'))
  } catch (error) {
    yield put(authActions.loginFailed("Login failed"))
  }
 
}
function* handleLogout() {

  localStorage.removeItem('access_token');
  yield put(push('/login'))
}
function* watchLoginFlow() {
  while (true) {
    //if Logged In
    const isLoggedIn = Boolean(localStorage.getItem('access_token'));
    if (!isLoggedIn) {
      const action: PayloadAction<LoginPayLoad> = yield take(authActions.login.type);
      yield fork(handleLogin, action.payload);
    }
    yield take(authActions.logOut.type);
    yield call(handleLogout);
  }
}

export function* authSaga() {
  yield fork(watchLoginFlow);
}
