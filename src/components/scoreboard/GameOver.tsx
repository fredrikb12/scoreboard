import styled from "styled-components";

const StyledGameOver = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 50px;

  button {
    font-size: 1.15rem;
  }

  button:hover {
    cursor: pointer;
  }
`;

interface IProps {
  winner: string | null;
  resetGame: () => void;
}

function GameOver({ winner, resetGame }: IProps) {
  return (
    <StyledGameOver>
      <h1>{winner} wins the game!</h1>
      <button onClick={resetGame}>Start a new game</button>
    </StyledGameOver>
  );
}

export default GameOver;
