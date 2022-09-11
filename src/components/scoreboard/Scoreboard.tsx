import { useEffect, useState } from "react";
import { IPlayer } from "../../types/player";
import { pointConverter } from "../../utils/points/pointConverter";
import PlayerScoreRow from "./PlayerScoreRow";
import { handleNewPoint } from "../../utils/points/newPoint";
import { playerFactory } from "../../utils/playerFactory";
import { playerHasWon } from "../../utils/points/playerHasWon";
import ScoreButton from "./ScoreButton/ScoreButton";
import { StyledScoreboard } from "./styled/Scoreboard.styled";
import GameOver from "./GameOver";
import { FlexColContainer } from "./styled/FlexColContainer.styled";

function Scoreboard() {
  const [player1, setPlayer1] = useState<IPlayer>(playerFactory("Player 1"));
  const [player2, setPlayer2] = useState<IPlayer>(playerFactory("Player 2"));
  const [gameOver, setGameOver] = useState(false);
  const [winner, setWinner] = useState<string | null>(null);

  useEffect(() => {
    const points1 = player1.points;
    const points2 = player2.points;
    if (points1 > points2) {
      const hasWon = playerHasWon(points1, points2);
      if (!hasWon) return;
      setGameOver(hasWon);
      setWinner(player1.name);
    } else {
      const hasWon = playerHasWon(points2, points1);
      if (!hasWon) return;
      setGameOver(hasWon);
      setWinner(player2.name);
    }
  }, [player1.points, player2.points, player1.name, player2.name]);

  useEffect(() => {
    const convertedScores = pointConverter(player1.points, player2.points);
    setPlayer1((prevState) => {
      return { ...prevState, displayScore: convertedScores.player1 };
    });
    setPlayer2((prevState) => {
      return { ...prevState, displayScore: convertedScores.player2 };
    });
  }, [player1.points, player2.points]);

  function resetGame() {
    setPlayer1(playerFactory(player1.name));
    setPlayer2(playerFactory(player2.name));
    setGameOver(false);
    setWinner(null);
  }

  return (
    <FlexColContainer>
      <StyledScoreboard>
        <PlayerScoreRow
          name={player1.name}
          displayScore={player1.displayScore}
        />
        <PlayerScoreRow
          name={player2.name}
          displayScore={player2.displayScore}
        />
      </StyledScoreboard>
      <div style={{ display: "flex", gap: "50px" }}>
        <ScoreButton
          disabled={gameOver}
          handleClick={() => handleNewPoint(setPlayer1)}
          name={player1.name}
        />
        <ScoreButton
          disabled={gameOver}
          handleClick={() => handleNewPoint(setPlayer2)}
          name={player2.name}
        />
      </div>
      {winner !== null ? (
        <GameOver winner={winner} resetGame={resetGame} />
      ) : null}
    </FlexColContainer>
  );
}

export default Scoreboard;
