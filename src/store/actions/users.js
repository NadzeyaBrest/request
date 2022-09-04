import Repository from "../../repository";
import { users } from "../reducers/users";

export const getUsers = () => async (dispatch) => {
  try {
    const { value, error } = await Repository.UsersActions.getUsersFromApi();
    if (error) {
      console.log("error getting");
    } else {
      dispatch(users.actions.setUsers(value));
    }
  } catch (error) {
    console.log(error);
  }
};
