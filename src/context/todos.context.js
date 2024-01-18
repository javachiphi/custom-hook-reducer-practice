import React, { createContext } from "react";
// context calls the todostates hook and use these pieces and store as a value in the context
import useTodoStates from "../hooks/useTodoStates";

const defaultTodos = [
  { id: 1, task: "Mow the lawn using goats", completed: false },
  { id: 2, task: "Release lady bugs into garden", completed: true },
];

export const TodoContext = createContext();

export function TodoProvider(props) {
  const todosStuff = useTodoStates(defaultTodos);
  return (
    <TodoContext.Provider value={todosStuff}>
      {props.children}
    </TodoContext.Provider>
  );
}
