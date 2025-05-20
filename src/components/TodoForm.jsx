import React, { useContext, useState } from "react";
import { TodoContext } from "../context/TodoContext";

export const TodoForm = () => {
  const [inputValue, setInputValue] = useState("");
  const { todos, setTodos } = useContext(TodoContext);

  const addTodo = (event) => {
    event.preventDefault();

    const obj = { title: inputValue, id: Date.now() };

    setTodos([...todos, obj]);
  };

  return (
    <div style={{ border: "2px solid green", padding: "20px" }}>
      <i>this is TodoForm</i>
      <form onSubmit={addTodo}>
        <input type="text" onChange={(e) => setInputValue(e.target.value)} />
        <button type="submit">click</button>
      </form>
    </div>
  );
};
