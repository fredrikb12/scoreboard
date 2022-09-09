interface IProps {
  name: string;
  displayScore: string;
}

function PlayerScoreRow({ name, displayScore }: IProps) {
  return (
    <div>
      <p>{name} </p>
      <p
        style={{
          backgroundColor: "#1B1B1B",
          color: "#F32929",
          padding: "4px 8px",
          borderRadius: "4px",
          width: "80px",
          textAlign: "center",
        }}
      >
        {displayScore}
      </p>
    </div>
  );
}

export default PlayerScoreRow;
