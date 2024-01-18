import { v4 as uuidv4 } from "uuid";

const reducer = (state = [], action) => {
  switch (action.type) {
    case "ADD":
      return [...state, { id: uuidv4(), task: action.task, completed: false }];
    case "REMOVE":
      return state.filter((todo) => todo.id !== action.id);
    case "TOGGLE":
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
    case "EDIT":
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, task: action.newTask } : todo
      );
    default:
      return state;
  }
};

export default reducer;

// [type: "ADD", task: "walk the dog"]
// [type: "REMOVE", id: 123123123]
// [type: "TOGGLE", id: 123123123]
// [type: "EDIT", id: 123123123, newTask: "walk the cat"]
