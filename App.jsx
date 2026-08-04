import GameModal from "./components/GameModal";
import { useState, useEffect } from "react";
import "./App.css";
import GameBoard from "./components/GameBoard";
import Keyboard from "./components/Keyboard";
import evaluateGuess from "./utils/evaluateGuess";

function App() {
  // Hidden solution word
  const [solutionWord] = useState("PRICE");

  // Current guess
  const [currentGuess, setCurrentGuess] = useState("");

  // Submitted guesses
  const [pastGuesses, setPastGuesses] = useState([]);

  // Current active row
  const [currentRow, setCurrentRow] = useState(0);

  // Game status
  const [gameStatus, setGameStatus] = useState("IN_PROGRESS");

  const [keyColors, setKeyColors] = useState({});



  // Handles BOTH physical keyboard and virtual keyboard
  function handleKeyPress(key) {
  if (gameStatus !== "IN_PROGRESS") return;

  key = key.toUpperCase();

  // LETTERS
  if (/^[A-Z]$/.test(key)) {
    if (currentGuess.length < 5) {
      setCurrentGuess((prev) => prev + key);
    }
    return;
  }

  // BACKSPACE
  if (key === "BACKSPACE") {
    setCurrentGuess((prev) => prev.slice(0, -1));
    return;
  }

  // ENTER
  if (key === "ENTER") {
    if (currentGuess.length !== 5) return;

    const colors = evaluateGuess(currentGuess, solutionWord);

    const newGuess = {
      word: currentGuess,
      colors: colors,
    };

    const updatedGuesses = [...pastGuesses, newGuess];
    setPastGuesses(updatedGuesses);

    const updatedKeyColors = { ...keyColors };

    for (let i = 0; i < 5; i++) {
      const letter = currentGuess[i];
      const color = colors[i];

      if (
        updatedKeyColors[letter] !== "green" &&
        !(updatedKeyColors[letter] === "yellow" && color === "gray")
      ) {
        updatedKeyColors[letter] = color;
      }
    }

    setKeyColors(updatedKeyColors);

    if (currentGuess === solutionWord) {
      setGameStatus("WON");
    } else if (updatedGuesses.length === 6) {
      setGameStatus("LOST");
    }

    setCurrentRow(updatedGuesses.length);
    setCurrentGuess("");

    return;
  }
}
  function restartGame() {
  setCurrentGuess("");
  setPastGuesses([]);
  setCurrentRow(0);
  setGameStatus("IN_PROGRESS");
  setKeyColors({});
}
  // Physical keyboard
  useEffect(() => {
    function handleKeyDown(event) {
    event.preventDefault();
    handleKeyPress(event.key);
}

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
 }, [
  currentGuess,
  pastGuesses,
  currentRow,
  keyColors,
  gameStatus,
]);

  return (
    <div className="app">
      <h1 className="title">WORDLE</h1>

      <GameBoard
        currentGuess={currentGuess}
        currentRow={currentRow}
        pastGuesses={pastGuesses}
      />

      <Keyboard
  onKeyPress={handleKeyPress}
  keyColors={keyColors}
/>

     <GameModal
  gameStatus={gameStatus}
  solutionWord={solutionWord}
  onRestart={restartGame}
/>
    </div>
  );
}

export default App;