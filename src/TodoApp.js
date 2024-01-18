import React from "react";
import TodoList from "./toDoList";
import ToDoForm from "./toDoForm";
import { AppBar, Toolbar, Paper, Grid } from "@mui/material";
import { TodoProvider } from "./context/todos.context";

export default function TodoApp() {
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
          <TodoProvider>
            <ToDoForm />
            <TodoList />
          </TodoProvider>
        </Grid>
      </Grid>
    </Paper>
  );
}
