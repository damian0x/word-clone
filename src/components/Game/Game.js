import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput/GuessInput";
import GuessResults from "../GuessResults/GuessResults";
import { WonBanner, LostBanner } from "../Banner/Banner";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import Keyboard from "../Keyboard/Keyboard";
import { checkGuess } from "../../game-helpers";

function Game() {
  const [answer, setAnswer] = React.useState(() => sample(WORDS));
  // To make debugging easier, we'll log the solution in the console.
  console.info({ answer });

  const [gameStatus, setGameStatus] = React.useState("running");
  const [guesses, setGuesses] = React.useState([]);

  function handleAddGuess(tempGuess) {
    const nextGuesses = [...guesses, tempGuess];
    setGuesses(nextGuesses);

    if (tempGuess === answer) {
      setGameStatus("won");
    } else if (nextGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus("lost");
    }
  }

  function handleReset() {
    setAnswer(sample(WORDS));
    setGuesses([]);
    setGameStatus("running");
  }

  const validatedGuesses = guesses.map((guess) => checkGuess(guess, answer));

  return (
    <>
      <GuessResults validatedGuesses={validatedGuesses} answer={answer} />
      <GuessInput gameStatus={gameStatus} handleAddGuess={handleAddGuess} />
      {gameStatus === "won" && (
        <WonBanner
          gameStatus={gameStatus}
          numberOfGuesses={guesses.length}
          handleReset={handleReset}
        />
      )}
      {gameStatus === "lost" && (
        <LostBanner
          gameStatus={gameStatus}
          answer={answer}
          handleReset={handleReset}
        />
      )}
      <Keyboard validatedGuesses={validatedGuesses} />
    </>
  );
}

export default Game;
