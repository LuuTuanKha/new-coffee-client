import { createSlice } from "@reduxjs/toolkit";

const productSlice =  createSlice({
  name: 'listProduct',
  initialState:[],
  reducers: {
    add: (state,action) =>{
      state.push(action.payload)
    }
  }


})

export const { add,  } = productSlice.actions;

export const productFromStore = (state) => state.product;

export default productSlice.reducer;
