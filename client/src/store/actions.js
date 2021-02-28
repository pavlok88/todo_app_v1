import { todosActions } from "./slices/todoSlice";
import { userActions } from "./slices/userSlice";

const actions = {
  todos: { ...todosActions },
  user: { ...userActions },
};

export default actions
