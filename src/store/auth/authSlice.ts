import { createSlice } from '@reduxjs/toolkit';
export interface authState {
  status: "checking" | "authenticated" | "not-authenticated",
  uid?: number,
  email?: string,
  displayName?: string,
  photoURL?: string,
  errorMessage?: string
}
const initialState: authState = {
  status: "not-authenticated" 
}

interface Action {
  type: string,
  payload: any
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action: Action) => {

    },
    logout: (state, action: Action) => {

    },
    checkingCredentials: (state) => {
      state.status = 'checking';
    }
  }
});

// Action creators are generated for each case reducer function
export const { login, logout, checkingCredentials } = authSlice.actions;