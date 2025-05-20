import { createContext, useEffect, useState } from "react";

export const TimerContext = createContext();

export const TimerContextProvider = ({ children }) => {
  const [count, setCount] = useState(100);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [count]);

  //   localStorage.setItem("kudash", JSON.stringify(count));
  //   localStorage.getItem(JSON.parse("kudash"));
  //   const timerValue = {
  //     count,
  //   };

  return (
    <TimerContext.Provider value={{ adilet: count }}>
      {children}
    </TimerContext.Provider>
  );
};
