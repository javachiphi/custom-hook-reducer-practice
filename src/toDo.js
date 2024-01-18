import React, { useContext } from "react";
import {
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  Checkbox,
  IconButton,
} from "@mui/material";
import Delete from "@mui/icons-material/Delete";
import Edit from "@mui/icons-material/Edit";
import Cancel from "@mui/icons-material/Cancel";
import useToggle from "./hooks/useToggleState";
import EditToDoForm from "./editToDoForm";
import { TodoContext } from "./context/todos.context";

export default function ToDo({ id, task, completed }) {
  const [isEditing, toggle] = useToggle(false);
  const { removeTodo, toggleTodo } = useContext(TodoContext);

  return (
    <ListItem style={{ height: "64px" }}>
      {isEditing ? (
        <>
          <EditToDoForm id={id} task={task} toggleEditForm={toggle} />
          <IconButton onClick={toggle}>
            <Cancel />
          </IconButton>
        </>
      ) : (
        <>
          <Checkbox
            tabIndex={-1}
            checked={completed}
            onClick={() => toggleTodo(id)}
          />
          <ListItemText
            sx={{ textDecoration: completed ? "line-through" : "none" }}
          >
            {task}
          </ListItemText>
          <ListItemSecondaryAction>
            <IconButton aria-label="Delete" onClick={() => removeTodo(id)}>
              <Delete />
            </IconButton>
            <IconButton aria-label="Edit" onClick={toggle}>
              <Edit />
            </IconButton>
          </ListItemSecondaryAction>
        </>
      )}
    </ListItem>
  );
}
