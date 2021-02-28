import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    userData: null,
    isFetching: false,
    error: null,
  },
  reducers: {
    putUserData: (state, action) => {state.userData = action.payload},
    setError: (state, action) => {state.error = action.payload},
    clearError: (state) => {state.error = null},
    startFetch: (state) => {state.isFetching = true},
    stopFetch: (state) => {state.isFetching = false},
  },
});

// export const { addTodo, toggleTodo } = todosSlice.actions
export default userSlice.reducer;
export const userActions = userSlice.actions;


