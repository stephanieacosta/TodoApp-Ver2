import React from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

function TodoDetail() {
  const { id } = useParams();
  const todos = useSelector((state) => state.todo);

  const todo = todos.find((todo) => todo.id === parseInt(id));

  if (!todo) {
    return <div>Todo not found!</div>;
  }

  return (
    <div>
      <h2
        style={{
          textAlign: "center",
          fontWeight: "600",
          fontSize: "1.5rem",
          marginBottom: "1rem",
        }}
      >
        TODO Detail
      </h2>
      <div className="todo-detail-container">
        <div className="todo-detail">
          <h3>{todo.title}</h3>
        </div>
        <div className="todo-detail">
          <p>{todo.createdAt.toString()}</p>
        </div>
        <div className="todo-detail">
          <p className="description">{todo.description}</p>
        </div>
      </div>
      <Link to="/">
        <button className="back">Back to List</button>
      </Link>
    </div>
  );
}

export default TodoDetail;
