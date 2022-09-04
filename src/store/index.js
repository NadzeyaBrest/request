import { configureStore, combineReducers } from "@reduxjs/toolkit";
import users from "./reducers/users";

const reducer = combineReducers({ users });

export const setupStore = () => {
  return configureStore({ reducer });
};

export default setupStore;
