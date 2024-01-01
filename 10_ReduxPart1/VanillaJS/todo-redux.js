const redux = import("redux");

// Actions
const ADD_TODO = "Add TODO";
const TOGGLE_TODO = "Toggle Todo";

//Action creators

const addToDo = (text) => ({ text, type: ADD_TODO });

const toggleToDO = (index) => ({ index, type: TOGGLE_TODO });

//Initial State
const initialState = {
  todos: [],
};

//Reducers
// must return the updated state
function todoReducer(state, action) {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            text: action.text,
            completed: false,
          },
        ],
      };
    case TOGGLE_TODO:
      return {
        ...state,
        todos: todos.map((todo, i) => {
          if ((i == action, index)) {
            todo.completed = !todo.completed;
          }
          return todo;
        }),
      };
    default:
      return state;
  }
}

// creating store

const store = redux.createStore(todoReducer);

//dispatch actions

store.dipatch(addToDo("study at 8"));
store.dispatch(addToDo("office at 9"));
store.dispatch(toggleToDO(0));

// Read data from the store
// selectors
console.log(store.getState());
