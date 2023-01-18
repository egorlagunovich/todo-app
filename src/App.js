import { useReducer, useState } from "react";
import "./App.css";
import Todo from "./Todo";

const ADD_TODO = "ADD_TODO";
const TOGGLE_TODO = "TOGGLE_TODO";
const DELETE_TODO = "DELETE_TODO";

function reducer(todos, action) {
  switch (action.type) {
    case ADD_TODO:
      return [newTodo(action.payload.name), ...todos];
    case TOGGLE_TODO:
      return todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, complete: !todo.complete };
        }
        return todo;
      });
    case DELETE_TODO:
      return todos.filter((todo) => todo.id !== action.payload.id);
    default:
      return todos;
  }
}

function newTodo(name) {
  return {
    id: Date.now(),
    name,
    complete: false,
  };
}
function App() {
  const [todos, dispatch] = useReducer(reducer, []);
  const [name, setName] = useState();

  function handleSubmit(e) {
    e.preventDefault();
    dispatch({ type: ADD_TODO, payload: { name } });
    setName("");
  }

  return (
    <>
      <div className="app">
        <div className="menu">
          <h1>TodoApp</h1>
          <div>
            <form onSubmit={handleSubmit} className="forms">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></input>
              <button onClick={handleSubmit}>Add Todo</button>
            </form>
          </div>
        </div>
        <div className="todosList">
          {todos.map((todo) => {
            return <Todo key={todo.id} todo={todo} dispatch={dispatch} />;
          })}
        </div>
      </div>
      <footer>
        Copyright © 2023 egorlagunovich
      </footer>
    </>
  );
}

export default App;
