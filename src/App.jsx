import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import TodoList from "./components/TodoList";
import CreateTodo from "./components/CreateTodo";
import TodoDetail from "./components/TodoDetail";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<TodoList />} />
          <Route path="/todos/new" element={<CreateTodo />} />
          <Route path="/todos/:id" element={<TodoDetail />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
