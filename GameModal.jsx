function GameModal({ gameStatus, solutionWord, onRestart }) {
  if (gameStatus === "IN_PROGRESS") return null;

  return (
    <div className="modal-overlay">
      <div className="modal">

        <h2>
          {gameStatus === "WON"
            ? "🎉 Congratulations!"
            : "😢 Game Over"}
        </h2>

        <p>
          {gameStatus === "WON"
            ? "You guessed the word correctly!"
            : `The correct word was ${solutionWord}`}
        </p>

        <button
          className="restart-btn"
          onClick={onRestart}
        >
          Play Again
        </button>

      </div>
    </div>
  );
}

export default GameModal;