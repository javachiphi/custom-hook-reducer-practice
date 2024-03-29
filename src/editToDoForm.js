import React, { useContext } from "react";
import { TextField } from "@mui/material";
import useInputState from "./hooks/useInputState";
import { DispatchContext } from "./context/todos.context";

export default function EditToDoForm({ id, task, toggleEditForm }) {
  const [value, handleChange, reset] = useInputState(task);
  const dispatch = useContext(DispatchContext);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        dispatch({ type: "EDIT", id: id, newTask: value });
        reset();
        toggleEditForm();
      }}
      style={{ marginLeft: "1rem", width: "50%" }}
    >
      <TextField
        margin="normal"
        value={value}
        onChange={handleChange}
        fullWidth
        autoFocus
        variant="standard"
      />
    </form>
  );
}
