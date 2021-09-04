import React, { useState } from "react";
import "./calculator.css";
import Input from "./components/input.jsx";
import Buttons from "./components/buttons.jsx";

const Calculator = () => {
  let [inputValue, setInputValue] = useState("");
  let currentInput = "";

  const onAdd = (char) => {
    currentInput += char;
    console.log(currentInput);
    console.log(
      Number.isInteger(Number(currentInput[currentInput.length - 1]))
    );
    setInputValue(currentInput);
  };

  const resetInputValue = () => {
    currentInput = "";
    setInputValue(currentInput);
  };

  const getResult = () => {
    if (Number.isInteger(Number(inputValue[inputValue.length - 1]))) {
      currentInput = eval(inputValue) ? String(eval(inputValue)) : "Ошибка";
      setInputValue(
        currentInput === "Infinity" ? "Не делите на ноль" : currentInput
      );
      currentInput = "";
    } else {
      setInputValue("Ошибка");
    }
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
