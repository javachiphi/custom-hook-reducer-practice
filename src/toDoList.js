import React, { useContext } from "react";
import { Paper, List } from "@mui/material";
import ToDo from "./toDo";
import Divider from "@mui/material/Divider";
import { TodoContext } from "./context/todos.context";

export default function TodoList() {
  const { todos, removeTodo, toggleTodo } = useContext(TodoContext);

  if (todos.length)
    return (
      <Paper>
        <List>
          {todos.map((todo, i) => (
            <>
              <ToDo
                {...todo}
                key={todo.id}
                removeTodo={removeTodo}
                toggleTodo={toggleTodo}
              />
              {i < todos.length - 1 && <Divider />}
            </>
          ))}
        </List>
      </Paper>
    );
  return null;
}
