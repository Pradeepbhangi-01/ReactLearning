import { useSelector, useDispatch } from "react-redux";
// import { toggleTodo } from "../../redux/actions/todoActions";
import {
  todoSelector,
  getInitialStateAsync,
} from "../../redux/reducers/todoReducer";
import { actions } from "../../redux/reducers/todoReducer";

import { useffect } from "react";

import "./ToDoList.css";

function ToDoList() {
  // const todos = useSelector((state) => state.todoReducer.todos);
  const todos = useSelector(todoSelector);

  const disptach = useDispatch();
  // const todos= store.getState().todos;

  useffect(() => {}, [disptach(getInitialStateAsync)]);

  return (
    <div className="container">
      <ul>
        {todos.map((todo, index) => (
          <li key={todo.id}>
            <span className="content">{todo.text}</span>
            <span className={todo.completed ? "completed" : "pending"}>
              {todo.completed ? "Completed" : "Pending"}
            </span>
            <button
              className="btn btn-warning"
              onClick={() => {
                disptach(actions.toggle(index));
              }}
            >
              Toggle
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
