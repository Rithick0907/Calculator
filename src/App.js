import Main from "./pages/Main";
import { useState } from "react";

const App = () => {
  const [value, setValue] = useState(0);
  const [prevValue, setPrevValue] = useState(0);
  const [operation, setOperation] = useState("+");

  const clearValue = () => setValue(() => 0);
  const handleSetValue = (val) => setValue((prevValue) => prevValue * 10 + val);
  const handleSetPrevValue = (val) => setPrevValue(() => val);
  const handleSetOperation = (val) => {
    handleSetPrevValue(value);
    setOperation(() => val);
    clearValue();
  };
  const setResult = () => {
    switch (operation) {
      case "+":
        setValue((currValue) => currValue + prevValue);
        break;
      case "-":
        setValue((currValue) => currValue - prevValue);
        break;
      case "*":
        setValue((currValue) => currValue * prevValue);
        break;
      case "/":
        setValue((currValue) => currValue / prevValue);
        break;
      case "%":
        setValue((currValue) => currValue % prevValue);
        break;
    }
  };

  return (
    <Main
      clearValue={clearValue}
      setOperation={handleSetOperation}
      setValue={handleSetValue}
      setResult={setResult}
      value={value}
    />
  );
};

export default App;
