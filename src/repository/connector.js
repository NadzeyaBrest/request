import axios from "axios";

class Connector {
  connector;
  constructor() {
    this.connector = axios.create({
      baseURL:
        "https://crudcrud.com/api/0f445b2b1030419283cbe4daca76142b/shopping",
    });
  }
}
export default new Connector();
