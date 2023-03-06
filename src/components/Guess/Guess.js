import React from "react";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

function Guess({ value, answer }) {
  const wordStatuses = checkGuess(value, answer);
  return (
    <p className="guess">
      {range(5).map((num) => (
        <span
          className={`cell ${wordStatuses ? wordStatuses[num].status : ""}`}
          key={`cell-${num}`}
        >
          {wordStatuses ? wordStatuses[num].letter : undefined}
        </span>
      ))}
    </p>
  );
}

export default Guess;
