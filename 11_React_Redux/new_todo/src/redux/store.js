// const redux = require("redux");

// import * as redux from "redux";
// import { combineReducer } from "redux";

import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { todoReducer } from "./reducers/todoReducer";
import { noteReducer } from "./reducers/noteReducer";
import { notificationReducer } from "./reducers/notificationReducer";
import { loggerMiddleware } from "./middlewares/loggerMiddleware";

// const result = combineReducer({
//   todoReducer,
//   noteReducer,
// });

// export const store = redux.createStore(result);
export const store = configureStore({
  reducer: {
    todoReducer,
    noteReducer,
    notificationReducer,
  },

  moddleware: [...getDefaultMiddleware(), loggerMiddleware],
});
