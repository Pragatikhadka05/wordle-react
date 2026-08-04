import Key from "./Key";

function KeyboardRow({ letters, onKeyPress, keyColors }) {
  return (
    <div className="keyboard-row">
      {letters.map((letter) => (
        <Key
          key={letter}
          value={letter}
          onKeyPress={onKeyPress}
          color={keyColors[letter]}
        />
      ))}
    </div>
  );
}

export default KeyboardRow;