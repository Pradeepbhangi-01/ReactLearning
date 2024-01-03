// import { ADD_NOTE, DELETE_NOTE } from "../actions/noteActions";

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  notes: [
    {
      text: "Lorem jdi jbkn iciown",
      createdOn: new Date().toString(),
    },
    {
      text: "Lorem jdi jbkn iciown",
      createdOn: new Date().toString(),
    },
  ],
};

// creating reducer using the redux toolkit

const noteSlice = createSlice({
  name: "note",
  initialState: initialState,
  reducers: {
    // to add the note
    add: (state, action) => {
      state.notes.push({
        text: action.payload,
        createdOn: new Date().toString(),
      });
    },

    delete: (state, action) => {
      state.notes.splice(action.payload, 1);
    },
  },
});

export const noteSelector = (state) => state.noteReducer.notes;

export const noteReducer = noteSlice.reducer;
export const actions = noteSlice.actions;

// created using the react redux

// export const noteReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case ADD_NOTE:
//       return {
//         ...state,
//         notes: [
//           ...state.notes,
//           {
//             text: action.text,
//             createdOn: new Date(),
//           },
//         ],
//       };
//     case DELETE_NOTE:
//       state.notes.splice(action.index, 1);
//       return {
//         ...state,
//         notes: [...state.notes],
//       };

//     default:
//       return state;
//   }
// };
