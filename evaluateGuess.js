function evaluateGuess(guess, solution) {
  const result = [];
  const solutionLetters = solution.split("");

  // First pass - Correct position (Green)
  for (let i = 0; i < 5; i++) {
    if (guess[i] === solution[i]) {
      result[i] = "green";
      solutionLetters[i] = null;
    } else {
      result[i] = null;
    }
  }

  // Second pass - Wrong position (Yellow) or Not present (Gray)
  for (let i = 0; i < 5; i++) {
    if (result[i] !== null) continue;

    const index = solutionLetters.indexOf(guess[i]);

    if (index !== -1) {
      result[i] = "yellow";
      solutionLetters[index] = null;
    } else {
      result[i] = "gray";
    }
  }

  return result;
}

export default evaluateGuess;