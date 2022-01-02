import createSagaMiddleware from 'redux-saga';
import { Action, combineReducers, configureStore, ThunkAction } from '@reduxjs/toolkit';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import authReducer from 'features/auth/authSlice';
import productReducer from 'features/product/productSlice';

import { history } from 'utils';
import rootSaga from './rootSage';
import orderItemsSlice from 'features/order/orderItemsSlice';
const rootReducer = combineReducers({
  router:  connectRouter(history),
  auth: authReducer,
  product: productReducer,
  orderItems: orderItemsSlice 
})
const sagaMiddleWare = createSagaMiddleware();
export const store = configureStore({
  
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleWare, routerMiddleware(history)),

  

});
sagaMiddleWare.run(rootSaga);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
