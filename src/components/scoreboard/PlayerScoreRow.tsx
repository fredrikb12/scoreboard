interface IProps {
  name: string;
  points: number;
  displayScore: string;
}

function PlayerScoreRow({ name, points, displayScore }: IProps) {
  return (
    <div style={{ display: "flex", gap: "20px" }}>
      <p>Name: {name} </p>
      <p>Points: {points}</p>
      <p>Score: {displayScore}</p>
    </div>
  );
}

export default PlayerScoreRow;
