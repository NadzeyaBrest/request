import axios from "axios";

class Connector {
  connector;
  constructor() {
    this.connector = axios.create({
      baseURL:
        "https://crudcrud.com/api/a42aa23dae4b470ab509151ced291405/shopping",
    });
  }
}
export default new Connector();
