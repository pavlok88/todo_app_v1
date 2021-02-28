import http from "./interceptor";

//auth------------------
export const loginRequest = ({ email, password }) => {
  const data = { email, password };
  http.post("/auth/login", data);
};

export const registerRequest = ({ email, password }) => {
  const data = { email, password };
  http.post("/auth/register", data);
};

//todo-----------------

export const getAllTodos = () => http.get("/todo");
export const createTodo = (data) => http.post("/todo", { data });
