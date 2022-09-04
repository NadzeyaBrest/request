import axios from "axios";

class Connector {
  connector;
  constructor() {
    this.connector = axios.create({
      baseURL: "https://crudcrud.com/api/u6fc472bc63434e36af424f5e9b3d1014/",
    });
  }
}
export default new Connector();
