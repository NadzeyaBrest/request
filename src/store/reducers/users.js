import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  users: [],
  message: {},
};
export const users = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUsers(state, { payload }) {
      state.users = payload;
    },
    setMessage(state, { payload }) {
      state.message = payload;
    },
  },
});
export default users.reducer;
