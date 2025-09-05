import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface UserDataSlice {
  name: string;
  email: string;
  phoneNumber: string;
  profession: string;
  profileAvatarId: number;
}

const initialState: UserDataSlice = {
  name: "",
  email: "",
  phoneNumber: "",
  profession: "",
  profileAvatarId: 0,
};

const userDataSlice = createSlice({
  name: "user-data",
  initialState,
  reducers: {
    updateUserData: (state, action: PayloadAction<Partial<UserDataSlice>>) => {
      Object.assign(state, action.payload);
    },
    resetUserData: (state) => {
      Object.assign(state, initialState);
    },
  },
});

export const { updateUserData, resetUserData } = userDataSlice.actions;
export default userDataSlice.reducer;
