import React from "react";
import { range } from "../../utils";

function Guess({ value, answer }) {
  return (
    <p className="guess">
      {range(5).map((num) => (
        <span
          className={`cell ${value ? value[num].status : ""}`}
          key={`cell-${num}`}
        >
          {value ? value[num].letter : undefined}
        </span>
      ))}
    </p>
  );
}

export default Guess;
