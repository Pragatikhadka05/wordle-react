import Tile from "./Tile";

function Row({ word, colors = [] }) {
  const letters = word.split("");

  return (
    <div className="row">
      <Tile letter={letters[0] || ""} status={colors[0]} />
      <Tile letter={letters[1] || ""} status={colors[1]} />
      <Tile letter={letters[2] || ""} status={colors[2]} />
      <Tile letter={letters[3] || ""} status={colors[3]} />
      <Tile letter={letters[4] || ""} status={colors[4]} />
    </div>
  );
}

export default Row;