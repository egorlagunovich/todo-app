import React from "react";
import "./todo.css";

const TOGGLE_TODO = "TOGGLE_TODO";
const DELETE_TODO = "DELETE_TODO";

export default function Todo({ todo, dispatch }) {
  return (
    <div className="todo">
      <span
        style={{ color: todo.complete ? "green" : "white", fontSize: "30px" }}
      >
        {todo.name}
      </span>
      <div className="buts">
        <button
          className="delBut"
          onClick={() =>
            dispatch({ type: DELETE_TODO, payload: { id: todo.id } })
          }
        >
          Delete
        </button>
        <button
          onClick={() =>
            dispatch({ type: TOGGLE_TODO, payload: { id: todo.id } })
          }
        >
          Toggle
        </button>
      </div>
    </div>
  );
}
