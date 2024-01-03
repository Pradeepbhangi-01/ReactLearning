import { createSlice } from "@reduxjs/toolkit";
import { actions } from "./todoReducer";

const initialState = {
  message: "",
};

const notificationSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {
    reset: (state, action) => {
      state.message = "";
    },
  },
  // extraReducers: {
  //   "todo/add": (state, action) => {
  //     state.message = "Todo is created";
  //   },
  //   "note/add": (state, action) => {
  //     state.message = "Note is created";
  //   },
  //   "note/delete": (state, action) => {
  //     state.message = "Note is deleted";
  //   },
  // },

  // Recommended way 1
  // extraReducers: (builder) => {
  //   builder.addCase(actions.add, (state, action) => {
  //     state.message = "Todo is created";
  //   });
  // },

  // Recommended way of 2
  extraReducers: {
    // map objects: [key]: value

    [actions.add]: (state, action) => {
      state.message = "todo is created";
    },
  },
});

export const notificationReducer = notificationSlice.reducer;

export const resetNotification = notificationSlice.actions.reset;
export const notifictionSelector = (state) => state.notificationReducer.message;
