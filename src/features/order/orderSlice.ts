import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'app/store';
import { ListResponse, OrderResponse } from 'models';

export interface OrderState {
  loading: boolean;
  rawData: ListResponse<OrderResponse> ;
 
}

const initialState: OrderState = {
  loading: false,
  rawData: {data: [], pagination: {
    totalPage:1,
    currentPage:1
  }},
};
const OrderSlice = createSlice({
  name: 'Order',
  initialState: initialState,
  reducers: {
    fetchOrderList(state) {
      state.loading = true;
    },
    fetchOrderListSuccess(state, action: PayloadAction<ListResponse<OrderResponse>>) {
      state.rawData.data = action.payload.data
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
export const selectOrderList = (state: RootState) => state.order.rawData;
export const selectOrderLoading = (state: RootState) => state.order.loading;


// Reducer
const orderReducer = OrderSlice.reducer;
export default orderReducer;
