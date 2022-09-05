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
