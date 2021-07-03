import Main from "./pages/Main";
import { useState } from "react";

const App = () => {
  const [value, setValue] = useState("0");
  const [prevValue, setPrevValue] = useState("0");

  const handleSetPrevValue = () => setPrevValue(() => value);
  const clearCurrentValue = () => setValue(() => "0");
  const clearPreviousValue = () => setPrevValue(() => "0");
  const handleSetValue = (val) => {
    setValue((prev) => {
      if (prev === "0" || prevValue === value) return val;
      return prev.concat(val);
    });
  };

  const setResult = (operation) => {
    switch (operation) {
      case "+":
        if (prevValue !== "0") {
          setValue((currValue) => {
            const sum = String(parseFloat(prevValue) + parseFloat(currValue));
            setPrevValue(() => sum);
            return sum;
          });
        }
        break;
      case "-":
        if (prevValue !== "0") {
          setValue((currValue) => {
            const diff = String(parseFloat(prevValue) - parseFloat(currValue));
            setPrevValue(() => diff);
            return diff;
          });
        }
        break;
      case "*":
        if (prevValue !== "0") {
          setValue((currValue) => {
            const mul = String(parseFloat(prevValue) * parseFloat(currValue));
            setPrevValue(() => mul);
            return mul;
          });
        }
        break;
      case "/":
        if (prevValue !== "0") {
          setValue((currValue) => {
            const div = String(parseFloat(prevValue) / parseFloat(currValue));
            setPrevValue(() => div);
            return div;
          });
        }
        break;
      case "%":
        if (prevValue !== "0") {
          setValue((currValue) => {
            const mod = String(parseFloat(prevValue) % parseFloat(currValue));
            setPrevValue(() => mod);
            return mod;
          });
        }
        break;
      default:
        setValue((curr) => prevValue);
    }
  };

  return (
    <Main
      clearCurrentValue={clearCurrentValue}
      clearPreviousValue={clearPreviousValue}
      setPrevValue={handleSetPrevValue}
      setValue={handleSetValue}
      setResult={setResult}
      value={value}
    />
  );
};

export default App;
