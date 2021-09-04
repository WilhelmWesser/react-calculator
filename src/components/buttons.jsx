import React from "react";
import Operators from "./operators.jsx";
import Numbers from "./numbers.jsx";

const Buttons = ({ operations, numberArrays, onResult, onAdd, onReset }) => {
  return (
    <div className="buttons">
      <Operators operations={operations} onAction={onAdd} />
      <div className="leftPanel">
        {numberArrays.map((array) => (
          <Numbers
            key={numberArrays.indexOf(array)}
            numbers={array}
            onAdd={onAdd}
            onReset={onReset}
          />
        ))}
      </div>
      <div className="equal" onClick={onResult}>
        =
      </div>
    </div>
  );
};

export default Buttons;
