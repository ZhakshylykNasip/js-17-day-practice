import React, { useContext } from "react";
import { TodoItem } from "./TodoItem";
import { TodoContext } from "../context/TodoContext";

export const TodoList = () => {
  const { todos } = useContext(TodoContext);

  return (
    <div style={{ padding: "20px", border: "2px solid red" }}>
      <i>this is TODO LIST</i>
      {todos.map((el) => (
        <TodoItem title={el.title} key={el.id} />
      ))}
    </div>
  );
};
