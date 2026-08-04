import Row from "./Row";

function GameBoard({ currentGuess, currentRow, pastGuesses }) {
  return (
    <div className="game-board">
      {[0, 1, 2, 3, 4, 5].map((index) => {
        let word = "";
        let colors = [];

        if (index < pastGuesses.length) {
          word = pastGuesses[index].word;
          colors = pastGuesses[index].colors;
        } else if (index === currentRow) {
          word = currentGuess;
        }

        return (
          <Row
            key={index}
            word={word}
            colors={colors}
          />
        );
      })}
    </div>
  );
}

export default GameBoard;