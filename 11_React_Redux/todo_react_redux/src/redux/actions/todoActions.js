// Action constants

export const ADD_TODO = "ADD ToDo";
export const TOGGLE_TODO = "Toggle Todo";

// Action Creators
export const addTodo = (text, type) => ({
  text,
  type: ADD_TODO,
});

export const toggleTodo = (index) => ({ index, type: TOGGLE_TODO });
