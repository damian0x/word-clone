import React from "react";

function GuessInput() {
  const [state, setState] = React.useState({ quess: "" });

  function handleSubmit(e) {
    e.preventDefault();

    console.log(state);
    setState({ quess: "" });
  }

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={state.quess}
        minLength={5}
        maxLength={5}
        pattern={"/[A-Z]{5}/"}
        onChange={(e) => setState({ quess: e.target.value.toUpperCase() })}
      />
    </form>
  );
}

export default GuessInput;
