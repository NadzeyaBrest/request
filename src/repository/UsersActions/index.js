import Connector from "../connector";

class UsersActions {
  getShoppingFromApi = async () => {
    const result = {
      value: null,
      error: null,
    };
    try {
      const response = await Connector.connector.get("shopping");
      result.value = response.data;
    } catch (error) {
      result.error = error;
    }
    console.log(result);
    return result;
  };
}
export default new UsersActions();
