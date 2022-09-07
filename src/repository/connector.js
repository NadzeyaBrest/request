import axios from "axios";

class Connector {
  connector;
  constructor() {
    this.connector = axios.create({
      baseURL:
        "https://crudcrud.com/api/ae4a8bd68bc5478bbe35bcc6a83ac984/shopping",
    });
  }
}
export default new Connector();
