import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    title: "Todo 1",
    description: "Description 1",
    createdAt: new Date(),
    completed: false,
  },
  {
    id: 2,
    title: "Todo 2",
    description: "Description 2",
    createdAt: new Date(),
    completed: false,
  },
];

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
    },

    deleteTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload);
    },
    toggleStatus: (state, action) => {
      const todo = state.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    reset: () => initialState, // No la uso pero considero que es bueno dejarla
    deleteAllTodos: () => [],
  },
});

export const { addTodo, deleteTodo, toggleStatus, reset, deleteAllTodos } =
  todoSlice.actions;
export default todoSlice.reducer;
