function Key({ value, onKeyPress, color }) {
  return (
    <button
      className={`key ${color || ""}`}
      onClick={() => onKeyPress(value)}
    >
      {value}
    </button>
  );
}

export default Key;