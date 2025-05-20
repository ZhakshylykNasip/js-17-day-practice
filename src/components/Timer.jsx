import React, { useContext } from "react";
import { TodoContext } from "../context/TodoContext";
import { TimerContext } from "../context/TimerContext";

export const Timer = () => {
  const { adilet } = useContext(TimerContext);
  return (
    <div>
      <h1>Timer: {adilet}</h1>
    </div>
  );
};
