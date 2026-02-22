import {createSlice, type PayloadAction} from "@reduxjs/toolkit";

interface AuthState {
  name: string;
  surname: string;
  isAccepted: boolean;
  guestsAmount: string;
}

const initialState: AuthState = {
  name: "",
  surname: "",
  isAccepted: false,
  guestsAmount: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthData(state, action: PayloadAction<AuthState>) {
      return { ...state, ...action.payload };
    },
    resetAuthData() {
      return initialState;
    },
  },
});

export const { setAuthData, resetAuthData } = authSlice.actions;

export default authSlice.reducer;