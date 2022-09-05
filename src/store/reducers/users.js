import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  Shopping: [],
  message: {},
};
export const users = createSlice({
  name: "users",
  initialState,
  reducers: {
    setShopping(state, { payload }) {
      state.users = payload;
    },
    setMessage(state, { payload }) {
      state.message = payload;
    },
  },
});
export default users.reducer;
