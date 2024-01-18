import React, { createContext, useReducer } from "react";
import todoReducer from "../reducers/todo.reducer";
// context calls the reducer hook and use these pieces and store as a value in the context

const defaultTodos = [
  { id: 1, task: "Mow the lawn using goats", completed: false },
  { id: 2, task: "Release lady bugs into garden", completed: true },
];

export const TodoContext = createContext();

export function TodoProvider(props) {
  const [todos, dispatch] = useReducer(todoReducer, defaultTodos);
  return (
    <TodoContext.Provider value={{ todos, dispatch }}>
      {props.children}
    </TodoContext.Provider>
  );
}
