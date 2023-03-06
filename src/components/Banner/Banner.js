import React from "react";

function Banner({ gameStatus, children }) {
  const mood =
    gameStatus === "won" ? "happy" : gameStatus === "lost" ? "sad" : "";
  return <div className={`banner ${mood}`}>{children}</div>;
}

export function LostBanner({ gameStatus, answer }) {
  return (
    <Banner gameStatus={gameStatus}>
      <p>
        Sorry, the correct answer is <strong>{answer}</strong>.
      </p>
    </Banner>
  );
}

export function WonBanner({ gameStatus, numberOfGuesses }) {
  return (
    <Banner gameStatus={gameStatus}>
      <p>
        <strong>Congratulations!</strong> Got it in
        <strong>{numberOfGuesses} guesses</strong>.
      </p>
    </Banner>
  );
}

export default Banner;
