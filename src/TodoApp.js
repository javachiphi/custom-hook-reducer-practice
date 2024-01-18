import React, { useState } from "react";

import TodoList from "./toDoList";
import ToDoForm from "./toDoForm";
import { AppBar, Toolbar, Paper, Grid } from "@mui/material";

const initialTodos = [
  { id: 1, task: "Walk The Goldfish", completed: true },
  { id: 2, task: "Feed The Dog", completed: false },
  { id: 3, task: "Bath The Cat", completed: false },
];

export default function TodoApp() {
  const [todos, setTodos] = useState(initialTodos);
  const addTodo = (newTodoText) => {
    setTodos([...todos, { id: 4, task: newTodoText, completed: false }]);
  };
  // even if I call toggle state here (does it persist for this to arrive?)
  // if not how do I change the state of todos?

  const removeTodo = (todoId) => {
    // filter out removed todo
    const updatedTodos = todos.filter((todo) => todo.id !== todoId);
    // call setTodos with new todos array
    setTodos(updatedTodos);
  };

  const toggleTodo = (todoId) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  const editTodo = (todoId, value) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === todoId ? { ...todo, task: value } : todo
    );

    setTodos(updatedTodos);
  };

  return (
    <Paper
      style={{
        padding: 0,
        margin: 0,
        height: "100vh",
        backgroundColor: "#fafafa",
      }}
      elevation={0}
    >
      <AppBar color="primary" position="static" style={{ height: "64px" }}>
        <Toolbar>Todo with hooks</Toolbar>
      </AppBar>
      <h1>Todo App</h1>
      <Grid container justifyContent="center" sx={{ marginTop: "1rem" }}>
        <Grid item xs={11} md={8} lg={4}>
          <ToDoForm addTodo={addTodo} />
          <TodoList
            todos={todos}
            removeTodo={removeTodo}
            toggleTodo={toggleTodo}
            editTodo={editTodo}
          />
        </Grid>
      </Grid>
    </Paper>
  );
}
