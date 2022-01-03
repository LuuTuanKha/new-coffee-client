
import { authSaga } from 'features/auth/authSaga'
import categorySaga from 'features/category/categorySaga'
import OrderSaga from 'features/order/orderSaga'
import productSaga from 'features/product/productSaga'
import {all} from 'redux-saga/effects'


export default function* rootSaga(){
    console.log('Root Saga')
    yield all([authSaga(),productSaga(),categorySaga(),OrderSaga()])
}