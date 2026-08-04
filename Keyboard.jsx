import KeyboardRow from "./KeyboardRow";

function Keyboard({ onKeyPress, keyColors }) {
  return (
    <div className="keyboard">

      <KeyboardRow
        letters={["Q","W","E","R","T","Y","U","I","O","P"]}
        onKeyPress={onKeyPress}
        keyColors={keyColors}
      />

      <KeyboardRow
        letters={["A","S","D","F","G","H","J","K","L"]}
        onKeyPress={onKeyPress}
        keyColors={keyColors}
      />

      <KeyboardRow
        letters={[
          "ENTER",
          "Z",
          "X",
          "C",
          "V",
          "B",
          "N",
          "M",
          "BACKSPACE",
        ]}
        onKeyPress={onKeyPress}
        keyColors={keyColors}
      />

    </div>
  );
}

export default Keyboard;