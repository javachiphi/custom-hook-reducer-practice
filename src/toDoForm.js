import React, { useContext } from "react";
import { TextField, Paper } from "@mui/material";
import useInputState from "./hooks/useInputState";
import { DispatchContext } from "./context/todos.context";

export default function ToDoForm() {
  const [value, handleChange, reset] = useInputState("");
  const dispatch = useContext(DispatchContext);

  return (
    <Paper sx={{ margin: "1rem 0", padding: "0 1rem" }}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch({ type: "ADD", task: value });
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
