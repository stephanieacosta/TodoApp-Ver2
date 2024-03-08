import React from "react";
import { Link } from "react-router-dom";

function TodoList({ todos, deleteTodo }) {
  const handleDelete = (id) => {
    deleteTodo(id);
  };
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
              <h3>{todo.title}</h3>
            </Link>
            <button onClick={() => handleDelete(todo.id)}>X</button>
          </div>
        ))}
      </div>
      <Link to="/todos/new">
        <button className="add">NEW Todo</button>
      </Link>
    </div>
  );
}

export default TodoList;
