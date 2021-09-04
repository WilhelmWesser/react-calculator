import React, { useState } from "react";
import "./calculator.css";
import Input from "./components/input.jsx";
import Buttons from "./components/buttons.jsx";

const Calculator = () => {
  let [inputValue, setInputValue] = useState("");
  let currentInput = "";
  const onAdd = (char) => {
    currentInput += char;
    setInputValue(currentInput);
  };

  const resetInputValue = () => {
    currentInput = "";
    setInputValue(currentInput);
  };

  const [numberArrays, setNumberArrays] = useState([
    [
      { value: "7", action: onAdd },
      { value: "8", action: onAdd },
      { value: "9", action: onAdd },
    ],
    [
      { value: "4", action: onAdd },
      { value: "5", action: onAdd },
      { value: "6", action: onAdd },
    ],
    [
      { value: "1", action: onAdd },
      { value: "2", action: onAdd },
      { value: "3", action: onAdd },
    ],
    [
      { value: "0", action: onAdd },
      { value: ".", action: onAdd },
      { value: "AC", action: resetInputValue },
    ],
  ]);

  const [initialOperations, setInitialOperations] = useState([
    { value: "+", action: onAdd },
    { value: "-", action: onAdd },
    { value: "*", action: onAdd },
    { value: "/", action: onAdd },
  ]);

  const getResult = () => {
    currentInput = eval(inputValue) ? eval(inputValue) : "Ошибка";
    setInputValue(currentInput);
  };

  return (
    <div className="calculator">
      <Input value={inputValue} />
      <Buttons
        operations={initialOperations}
        numberArrays={numberArrays}
        onResult={getResult}
        onAdd={onAdd}
        onReset={resetInputValue}
      />
    </div>
  );
};

export default Calculator;
