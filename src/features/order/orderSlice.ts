import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'app/store';
import { OrderResponse } from 'models';
import { Order } from 'models/Order';

export interface OrderState {
  loading: boolean;
  list: OrderResponse[];
 
}

const initialState: OrderState = {
  loading: false,
  list: [],
};
const OrderSlice = createSlice({
  name: 'Order',
  initialState: initialState,
  reducers: {
    fetchOrderList(state) {
      state.loading = true;
    },
    fetchOrderListSuccess(state, action: PayloadAction<OrderResponse[]>) {
      state.list = action.payload;
      state.loading = false;
    },

    fetchOrderListFailed(state) {
      state.loading = false;
    },
  },
});

// Actions
export const OrderActions = OrderSlice.actions;

// Selectors
export const selectOrderList = (state: RootState) => state.order.list;
export const selectOrderLoading = (state: RootState) => state.order.loading;


// Reducer
const orderReducer = OrderSlice.reducer;
export default orderReducer;
