import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// import { ADD_TODO, TOGGLE_TODO } from "../actions/todoActions";

const initialState = {
  todos: [
    { text: "Go to Gym at 6", completed: false },
    { text: "Study at 8", completed: true },
  ],
};

export const getInitialStateAsync = createAsyncThunk(
  "todo/getInitialState",
  // (arg, thunkAPI) => {
  //   axios.get("api call url").then((res) => {
  //     console.log("log that url");
  //     thunkAPI.dispatch(actions.setInitialState("res.data"));
  //   });
  // }

  () => {
    return axios.get("url");
  }
);
// creating Reducer using redux Toolkit

const todoSlice = createSlice({
  name: "todo",
  initialState: initialState,
  reducers: {
    // to set Initial state
    setInitialState: (state, action) => {
      state.todos = [...action.payload];
    },
    // this is add action
    add: (state, action) => {
      state.todos.push({
        text: action.payload,
        completed: false,
      });
    },
    // this is toggle action
    toggle: (state, action) => {
      state.todos.map((todo, i) => {
        if (i === action.payload) {
          todo.completed = !todo.completed;
        }
        return todo;
      });
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getInitialState.fulfilled, (state, action) => {
      state.todos = [...action.payload.data];
    });
  },
});

export const todoReducer = todoSlice.reducer;
export const actions = todoSlice.actions;

//selector
export const todoSelector = (state) => state.todoReducer.todos;

// reducer using redux

// export function todoReducer(state = initialState, action) {
//   switch (action.type) {
//     case ADD_TODO:
//       return {
//         ...state,
//         todos: [
//           ...state.todos,
//           {
//             text: action.text,
//             completed: false,
//           },
//         ],
//       };
//     case TOGGLE_TODO:
//       return {
//         ...state,
//         todos: state.todos.map((todo, i) => {
//           if (i == action.index) {
//             todo.completed = !todo.completed;
//           }
//           return todo;
//         }),
//       };
//     default:
//       return state;
//   }
// }
