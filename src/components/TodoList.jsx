import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteTodo,
  toggleStatus,
  deleteAllTodos,
} from "../redux/slices/todoSlice";

function TodoList() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todo);

  return (
    <div className="todolist-div">
      <h2
        style={{
          textAlign: "center",
          fontWeight: "600",
          fontSize: "1.5rem",
          marginBottom: "1rem",
        }}
      >
        TODO LIST
      </h2>
      <div className="todo-list">
        {todos.map((todo) => (
          <div key={todo.id} className="todo">
            <Link to={`/todos/${todo.id}`}>
              <h3 style={{ width: "24rem" }}>{todo.title}</h3>
            </Link>
            <button
              onClick={() => dispatch(toggleStatus(todo.id))}
              style={{
                color: todo.completed ? "green" : "red",
                cursor: "pointer",
                fontSize: "1.1rem",
                backgroundColor: "lightgray",
                border: "1px solid black",
                borderRadius: "5px",
                padding: "0.5rem",
                fontWeight: "600",
              }}
            >
              {todo.completed ? "Completed" : "Pending"}
            </button>
            <button onClick={() => dispatch(deleteTodo(todo.id))}>X</button>
          </div>
        ))}
      </div>
      <Link to="/todos/new">
        <button className="add">NEW Todo</button>
      </Link>
      <button className="deleteall" onClick={() => dispatch(deleteAllTodos())}>
        Reset all
      </button>
    </div>
  );
}

export default TodoList;
