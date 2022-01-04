import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'app/store';
import { ListResponse, Order, OrderResponse } from 'models';

export interface OrderState {
  loading: boolean;
  rawData: ListResponse<OrderResponse>;
  data: Order | undefined;
}

const initialState: OrderState = {
  loading: false,
  rawData: {
    data: [],
    pagination: {
      totalPage: 1,
      currentPage: 1,
    },
  },
  data: undefined,
};

const initialAddState: any = {
  loading: false,
  data: {},
};

const OrderSlice = createSlice({
  name: 'order',
  initialState: initialState,
  reducers: {
    fetchOrderList(state) {
      state.loading = true;
    },
    fetchOrderListSuccess(state, action: PayloadAction<ListResponse<OrderResponse>>) {
      state.rawData.data = action.payload.data;
      state.loading = false;
    },

    fetchOrderListFailed(state) {
      state.loading = false;
    },

    // addOrder(state){
    //   state.loading = true
    // },
    // addOrderSuccess(state){
    //   state.loading = false
    // }
    
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
