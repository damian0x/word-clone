import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput/GuessInput";
import GuessResults from "../GuessResults/GuessResults";
import { WonBanner, LostBanner } from "../Banner/Banner";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [gameStatus, setGameStatus] = React.useState("running");
  const [guesses, setGuesses] = React.useState([]);

  function handleAddGuess(tempGuess) {
    const nextGuesses = [...guesses, tempGuess];
    setGuesses(nextGuesses);

    if (tempGuess.value === answer) {
      setGameStatus("won");
    } else if (guesses.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus("lost");
    }
  }

  return (
    <>
      <GuessResults guesses={guesses} answer={answer} />
      <GuessInput gameStatus={gameStatus} handleAddGuess={handleAddGuess} />
      {gameStatus === "won" && (
        <WonBanner gameStatus={gameStatus} numberOfGuesses={guesses.length} />
      )}
      {gameStatus === "lost" && (
        <LostBanner gameStatus={gameStatus} answer={answer} />
      )}
    </>
  );
}

export default Game;
