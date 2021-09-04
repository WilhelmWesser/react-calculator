import React from "react";

const Numbers = ({ numbers }) => {
  return (
    <div className="numbers">
      {numbers.map((number) => (
        <div key={number.value} onClick={() => number.action(number.value)}>
          {number.value}
        </div>
      ))}
    </div>
  );
};

export default Numbers;
