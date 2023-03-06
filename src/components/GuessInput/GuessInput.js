import React from "react";

function GuessInput({ gameStatus, handleAddGuess }) {
  const [state, setState] = React.useState({ value: "" });

  function handleSubmit(e) {
    e.preventDefault();

    handleAddGuess({ id: crypto.randomUUID(), ...state });
    setState({ value: "" });
  }

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        title="5 letter word"
        type="text"
        value={state.value}
        required
        minLength={5}
        maxLength={5}
        disabled={gameStatus !== "running"}
        pattern="[a-zA-Z]{5}"
        onChange={(e) => setState({ value: e.target.value.toUpperCase() })}
      />
    </form>
  );
}

export default GuessInput;
