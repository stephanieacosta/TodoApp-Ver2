import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateTodo({ addTodo }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validación
    if (!title || !description) return;
    // Crear nuevo todo
    const newTodo = {
      id: Math.floor(Math.random() * 10000) + 1,
      title,
      description,
      createdAt: new Date(),
    };
    addTodo(newTodo);
    navigate("/");
  };

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
        NEW TODO
      </h2>
      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="TODO Title"
            required
          />
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="TODO Description"
            required
          />
        </div>
        <button type="submit" className="create">
          Save
        </button>
      </form>
    </div>
  );
}

export default CreateTodo;
