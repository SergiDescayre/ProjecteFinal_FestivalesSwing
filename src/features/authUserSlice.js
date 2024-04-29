import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isRegister: false,
  user: {},
  isLogin: false,
  showLogin : false
};

export const authUserSlice = createSlice({
  name: "authUser",
  initialState,
  reducers: {
    setIsRegister: (state, action) => {
      state.isRegister = action.payload;
    },
    setIsLogin: (state, action) => {
      state.isLogin = action.payload;
    },
    setAuthUser: (state, action) => {
      state.user = action.payload;
    },
    setShowLogin: (state, action) => {
      state.showLogin = action.payload;
    },

  },
});

export const  {setIsRegister,setIsLogin,setAuthUser,setShowLogin}  = authUserSlice.actions
