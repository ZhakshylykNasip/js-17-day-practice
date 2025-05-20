import React, { useEffect, useState } from "react";
import { TodoForm } from "./components/TodoForm";
import { TodoList } from "./components/TodoList";
import { TodoContextProvider } from "./context/TodoContext";
import { Timer } from "./components/Timer";
import { TimerContextProvider } from "./context/TimerContext";

function App() {
  return (
    <div>
      <h1>hello</h1>
      <TodoContextProvider>
        <TodoForm />
        <TodoList />
      </TodoContextProvider>

      <TimerContextProvider>
        <Timer />
      </TimerContextProvider>
    </div>
  );
}

export default App;
