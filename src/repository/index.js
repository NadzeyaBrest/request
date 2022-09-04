import connector from "./connector";
import UsersActions from "./UsersActions";

class Repository {
  connector = connector;
  UsersActions = UsersActions;
}
export default new Repository();
