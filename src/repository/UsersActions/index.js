import Connector from "../connector";

class UsersActions {
  getUsersFromApi = async () => {
    const result = {
      value: null,
      error: null,
    };
    try {
      const response = await Connector.connector.get("users");
      result.value = response.data;
    } catch (error) {
      result.error = error;
    }
    console.log(result);
    return result;
  };
}
export default new UsersActions();
