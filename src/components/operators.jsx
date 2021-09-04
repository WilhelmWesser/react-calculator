import React from "react";

const Operators = ({ operations, onAction }) => {
  return (
    <div className="operators">
      {operations.map((operation) => (
        <div
          key={operation.value}
          onClick={() => operation.action(operation.value)}
        >
          {operation.value}
        </div>
      ))}
    </div>
  );
};

export default Operators;
