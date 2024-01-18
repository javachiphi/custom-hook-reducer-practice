import React, { useContext } from "react";
import { Paper, List } from "@mui/material";
import ToDo from "./toDo";
import Divider from "@mui/material/Divider";
import { TodoContext } from "./context/todos.context";

export default function TodoList() {
  const { todos } = useContext(TodoContext);
  if (todos.length)
    return (
      <Paper>
        <List>
          {todos.map((todo, i) => (
            <div key={i}>
              <ToDo {...todo} />
              {i < todos.length - 1 && <Divider />}
            </div>
          ))}
        </List>
      </Paper>
    );
  return null;
}
