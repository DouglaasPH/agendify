import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/auth/authSlice";
import registerSlice from "./features/auth/registerSlice";
import userDataSlice from "./features/auth/userDataSlice";
import loadingSlice from "./features/loadingSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    register: registerSlice,
    userData: userDataSlice,
    loading: loadingSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
