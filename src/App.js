import Main from "./pages/Main";
import { useState } from "react";

const App = () => {
  const [value, setValue] = useState("0");
  const [prevValue, setPrevValue] = useState("0");

  const handleSetPrevValue = () => setPrevValue(() => value);
  const clearValue = () => setValue(() => "0");
  const handleSetValue = (val) => {
    setValue((prev) => {
      if (prev === "0" || prevValue === value) return val;
      return prev.concat(val);
    });
  };

  const setResult = (operation) => {
    switch (operation) {
      case "+":
        setValue((currValue) => {
          const sum = String(parseFloat(prevValue) + parseFloat(currValue));
          setPrevValue(() => sum);
          return sum;
        });
        break;
      case "-":
        setValue((currValue) => {
          const diff = String(parseFloat(prevValue) - parseFloat(currValue));
          setPrevValue(() => diff);
          return diff;
        });
        break;
      case "*":
        setValue((currValue) => {
          const mul = String(parseFloat(prevValue) * parseFloat(currValue));
          setPrevValue(() => mul);
          return mul;
        });
        break;
      case "/":
        setValue((currValue) => {
          const div = String(parseFloat(prevValue) / parseFloat(currValue));
          setPrevValue(() => div);
          return div;
        });
        break;
      case "%":
        setValue((currValue) => {
          const mod = String(parseFloat(prevValue) % parseFloat(currValue));
          setPrevValue(() => mod);
          return mod;
        });
        break;
    }
  };

  return (
    <Main
      clearValue={clearValue}
      setPrevValue={handleSetPrevValue}
      setValue={handleSetValue}
      setResult={setResult}
      value={value}
    />
  );
};

export default App;
