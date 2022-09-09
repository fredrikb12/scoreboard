interface IProps {
  winner: string | null;
  resetGame: () => void;
}

function GameOver({ winner, resetGame }: IProps) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginBottom: "50px",
      }}
    >
      <h1>{winner} wins the game!</h1>
      <button style={{ fontSize: "1.15rem" }} onClick={resetGame}>
        Start a new game
      </button>
    </div>
  );
}

export default GameOver;
