import Repository from "../../repository";
import { users } from "../reducers/users";

export const getShopping = () => async (dispatch) => {
  try {
    const { value, error } = await Repository.UsersActions.getShoppingFromApi();
    if (error) {
      console.log("error getting");
    } else {
      dispatch(users.actions.setShopping(value));
    }
  } catch (error) {
    console.log(error);
  }
};
export const setShopping = (order) => async (dispatch) => {
  try {
    const { value, error } = await Repository.UsersActions.postShoppingFromApi(
      order
    );
    if (error) {
      console.log("error getting");
    } else {
      dispatch(users.actions.addShopping(value));
    }
  } catch (error) {
    console.log(error);
  }
};

export const deleteShopping = (id) => async (dispatch) => {
  try {
    const { value, error } =
      await Repository.UsersActions.deleteShoppingFromApi(id);
    if (error) {
      console.log("error getting");
    } else {
      console.log(value);
      dispatch(users.actions.reduceShopping(value));
    }
  } catch (error) {
    console.log(error);
  }
};
export const putShopping = (id, change) => async (dispatch) => {
  try {
    const { value, error } = await Repository.UsersActions.putShoppingFromApi(
      id,
      change
    );
    if (error) {
      console.log("error getting");
    } else {
      dispatch(users.actions.changeShopping(id, value));
    }
  } catch (error) {
    console.log(error);
  }
};
