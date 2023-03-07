import React from "react";
import { getStatusByLetter } from "../../game-helpers";

function KeyboardButton({ status, children }) {
  return <button className={`keyboard-button ${status}`}>{children}</button>;
}

const KEYBOARD = [
  ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
  ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
  ["Z", "X", "C", "V", "B", "N", "M"],
];

function Keyboard({ validatedGuesses }) {
  const lettersStatuses = getStatusByLetter(validatedGuesses);

  return (
    <div className="keyboard">
      {KEYBOARD.map((row, index) => (
        <div key={index} className="keyboard-row">
          {row.map((letter) => (
            <KeyboardButton key={letter} status={lettersStatuses[letter]}>
              {letter}
            </KeyboardButton>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Keyboard;
