import { createContext, useState } from "react";

export const TodoContext = createContext();

export const TodoContextProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);

  const todoValue = { todos, setTodos };
  return (
    <TodoContext.Provider value={todoValue}>{children}</TodoContext.Provider>
  );
};
