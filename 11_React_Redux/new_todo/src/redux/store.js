// const redux = require("redux");

import * as redux from "redux";
import { combineReducer } from "redux";
import { todoReducer } from "./reducers/todoReducer";
import { noteReducer } from "./reducers/noteReducer";

const result = combineReducer({
  todoReducer,
  noteReducer,
});

export const store = redux.createStore(result);
