import axios from "axios";

class Connector {
  connector;
  constructor() {
    this.connector = axios.create({
      baseURL:
        "https://crudcrud.com/api/4f1ffac751e544f590360fb4bbaa8dcb/shopping",
    });
  }
}
export default new Connector();
