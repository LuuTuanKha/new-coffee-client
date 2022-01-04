







import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Toast } from 'components/Common/Toast';
import { User } from 'models';
import { toast } from 'react-toastify';

export interface LoginPayLoad {
  email: string;
  password: string;
}
export interface AuthState {
  isLoggedIn: boolean;
  logging?: boolean;
  currentUSer?: User;
}
const initialState: AuthState = {
  isLoggedIn: false,
  logging: false,
  currentUSer: undefined,
};
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, action: PayloadAction<LoginPayLoad>) {
      state.logging = true;
    },
    loginSuccess(state, action: PayloadAction<User>) {
      state.isLoggedIn = true;
      state.logging = false;
      state.currentUSer = action.payload;
      Toast('success','Đăng nhập thành công','')
    },
    loginFailed(state, action: PayloadAction<String>) {
      state.isLoggedIn = false;
      state.logging = false;
      toast.error("MY SUCCESS");
    },
    logOut(state) {
      state.isLoggedIn = false;
      state.currentUSer = undefined;
    },
  },
});

//Actions
export const authActions = authSlice.actions;

//Selectors
export const selectIsLoggedIn = (state: any) => state.auth.isLoggedIn;
export const selectIsLogging = (state: any) => state.auth.isLogging;

const authReducer = authSlice.reducer;

export default authReducer;
