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
    changeShopping(state, { payload }) {
      let { id, value } = payload;
      // let changeIndex = state.shopping.findIndex((order) => order[id]);
      // state.shopping.splice(changeIndex, 1, value);
      // // state.shopping.push(value);
      state.shopping = state.shopping.map(
        (item) => (item._id == id ? { ...item, cloth: value } : item)
      );
    },
  },
});
export default users.reducer;
