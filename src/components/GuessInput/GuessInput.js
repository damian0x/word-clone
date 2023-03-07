import React from "react";

function GuessInput({ gameStatus, handleAddGuess }) {
  const [state, setState] = React.useState("");

  function handleSubmit(e) {
    e.preventDefault();

    handleAddGuess(state);
    setState("");
  }

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        title="5 letter word"
        type="text"
        value={state}
        required
        minLength={5}
        maxLength={5}
        disabled={gameStatus !== "running"}
        pattern="[a-zA-Z]{5}"
        onChange={(e) => setState(e.target.value.toUpperCase())}
      />
    </form>
  );
}

export default GuessInput;
