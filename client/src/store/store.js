import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import createSagaMiddleware from 'redux-saga';

import todosSlice from "./slices/todoSlice";
import userSlice from "./slices/userSlice";

const saga = createSagaMiddleware();

const Store = configureStore({
  reducer: { user: userSlice, todos: todosSlice },
  middleware: [saga, ...getDefaultMiddleware({thunk:false})],
  devTools: true,
});


export default Store;
