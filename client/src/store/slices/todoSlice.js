import { createSlice } from "@reduxjs/toolkit";

const todosSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [{isDone: false, text:'kjsdbfbis73yfsdjkb', createdAt:'', id:2}],
    isFetching: false,
    error: null,
  },
  reducers: {
    putTodos: (state, action) => {state.todos = action.payload},
    modifyTodo: (state, action) => {
      state.todos = state.todos.map(todo=>((todo.id === action.payload.id) ? {...todo, ...action.payload}: todo))
    },
    setError: (state, action) => {state.error = action.payload},
    clearError: (state) => {state.error = null},
    startFetch: (state) => {state.isFetching = true},
    stopFetch: (state) => {state.isFetching = false},
  },
});

export default todosSlice.reducer
export const todosActions = todosSlice.actions;
