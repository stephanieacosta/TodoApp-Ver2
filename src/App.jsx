import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import TodoList from "./components/TodoList";
import CreateTodo from "./components/CreateTodo";
import TodoDetail from "./components/TodoDetail";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Todo 1",
      description: "Description 1",
      createdAt: new Date(),
    },
    {
      id: 2,
      title: "Todo 2",
      description: "Description 2",
      createdAt: new Date(),
    },
  ]);

  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route
            path="/"
            element={<TodoList todos={todos} deleteTodo={deleteTodo} />}
          />
          <Route path="/todos/new" element={<CreateTodo addTodo={addTodo} />} />
          <Route path="/todos/:id" element={<TodoDetail todos={todos} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
