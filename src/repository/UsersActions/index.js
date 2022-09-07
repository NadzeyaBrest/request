import Connector from "../connector";

class UsersActions {
  getShoppingFromApi = async () => {
    const result = {
      value: null,
      error: null,
    };
    try {
      const response = await Connector.connector.get("");
      result.value = response.data;
    } catch (error) {
      result.error = error;
    }
    return result;
  };

  postShoppingFromApi = async (order) => {
    console.log(order);
    const result = {
      value: null,
      error: null,
    };
    try {
      const response = await Connector.connector.post("/", {
        cloth: order,
      });
      result.value = response.data;
    } catch (error) {
      result.error = error;
    }
    return result;
  };
  deleteShoppingFromApi = async (order) => {
    console.log(order);
    const result = {
      value: null,
      error: null,
    };
    try {
      const response = await Connector.connector.delete(`/${order}`);
      result.value = response.data;
    } catch (error) {
      result.error = error;
    }
    return result;
  };
  putShoppingFromApi = async (id, change) => {
    const result = {
      value: null,
      error: null,
    };
    try {
      const response = await Connector.connector.put(`/${id}`, {
        cloth: change,
      });
      result.value = response.data;
    } catch (error) {
      result.error = error;
    }
    return result;
  };
}

export default new UsersActions();
