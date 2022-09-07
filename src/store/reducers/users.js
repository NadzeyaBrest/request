import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  shopping: [],
  message: {},
};
export const users = createSlice({
  name: "users",
  initialState,
  reducers: {
    setShopping(state, { payload }) {
      state.shopping = payload;
    },
    addShopping(state, { payload }) {
      state.shopping.push(payload);
    },
    reduceShopping(state, id) {
      let deleteIndex = state.shopping.findIndex((order) => order[id]);
      state.shopping.splice(deleteIndex, 1);
    },
    changeShopping(state, id, change) {
      let changeIndex = state.shopping.findIndex((order) => order[id]);
      state.shopping.splice(changeIndex, 1, change);
    },
  },
});
export default users.reducer;
