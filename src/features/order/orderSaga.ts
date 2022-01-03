import OrderAPi from 'api/order-api';
import { OrderResponse } from 'models';
import { call, put, takeLatest } from 'redux-saga/effects';
import { OrderActions } from './orderSlice';

function* fetchOrderList() {
  try {
    const response: OrderResponse[] = yield call(OrderAPi.getAll);
    yield put(OrderActions.fetchOrderListSuccess(response));
  } catch (error) {
    console.log('Failed to fetch Order list', error);
    yield put(OrderActions.fetchOrderListFailed());
  }
}

export default function* OrderSaga() {
  yield takeLatest(OrderActions.fetchOrderList, fetchOrderList);
}
