import { createSlice } from "@reduxjs/toolkit";
import AsyncStorage from '@react-native-async-storage/async-storage';

const initialState = {
  signupData: null,
  loading: false,
  token: null, // Initialize with null since loading from AsyncStorage is async
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
      // Store the token in AsyncStorage
      AsyncStorage.setItem("token", JSON.stringify(action.payload));
    },
    clearToken: (state) => {
      state.token = null;
      // Remove the token from AsyncStorage
      AsyncStorage.removeItem("token");
    },
    setSignupData: (state, action) => {
      state.signupData = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { setToken, clearToken, setSignupData, setLoading } = authSlice.actions;
export default authSlice.reducer;
