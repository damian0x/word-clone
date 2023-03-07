import React from "react";

function Banner({ gameStatus, action, actionText, children }) {
  const mood =
    gameStatus === "won" ? "happy" : gameStatus === "lost" ? "sad" : "";
  return (
    <div className={`banner ${mood}`}>
      {children}{" "}
      {action && (
        <button
          onClick={action}
          style={{ border: "2px solid white", padding: 4 }}
        >
          {actionText}
        </button>
      )}
    </div>
  );
}

export function LostBanner({ gameStatus, answer, handleReset }) {
  return (
    <Banner
      gameStatus={gameStatus}
      action={handleReset}
      actionText="Restart game"
    >
      <p>
        Sorry, the correct answer is <strong>{answer}</strong>.
      </p>
    </Banner>
  );
}

export function WonBanner({ gameStatus, numberOfGuesses, handleReset }) {
  return (
    <Banner
      gameStatus={gameStatus}
      action={handleReset}
      actionText="Restart game"
    >
      <p>
        <strong>Congratulations!</strong> Got it in{" "}
        <strong>{numberOfGuesses} guesses</strong>.
      </p>
    </Banner>
  );
}

export default Banner;
