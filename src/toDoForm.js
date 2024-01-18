import React from "react";
import { TextField, Paper } from "@mui/material";
import useInputState from "./hooks/useInputState";

export default function ToDoForm({ addTodo }) {
  const [value, handleChange, reset] = useInputState("");

  return (
    <Paper sx={{ margin: "1rem 0", padding: "0 1rem" }}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addTodo(value);
          reset();
        }}
        style={{ marginLeft: "1rem", width: "50%" }}
      >
        <TextField
          label="Add new to do"
          fullWidth
          value={value}
          onChange={handleChange}
          variant="standard"
          autoFocus
        />
      </form>
    </Paper>
  );
}
