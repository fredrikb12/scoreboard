import { useEffect, useState } from "react";
import { IPlayer } from "../../types/player";
import {
  playerHasWon,
  pointConverter,
} from "../../utils/points/pointConverter";
import PlayerScoreRow from "./PlayerScoreRow";
import { handleNewPoint } from "../../utils/points/newPoint";
import { playerFactory } from "../../utils/playerFactory";

function Scoreboard() {
  const [player1, setPlayer1] = useState<IPlayer>(
    playerFactory("Player 1", "player1")
  );
  const [player2, setPlayer2] = useState<IPlayer>(
    playerFactory("Player 2", "player2")
  );
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
    if (player1.points > player2.points) {
      let convertedScores = pointConverter(
        player1.points,
        player2.points,
        player1.player,
        player2.player
      );
      setPlayer1((prevState) => {
        return { ...prevState, displayScore: convertedScores.player1 };
      });
      setPlayer2((prevState) => {
        return { ...prevState, displayScore: convertedScores.player2 };
      });
    } else {
      let convertedScores = pointConverter(
        player2.points,
        player1.points,
        player2.player,
        player1.player
      );
      setPlayer1((prevState) => {
        return { ...prevState, displayScore: convertedScores.player1 };
      });
      setPlayer2((prevState) => {
        return { ...prevState, displayScore: convertedScores.player2 };
      });
    }
  }, [player1.points, player2.points, player1.player, player2.player]);

  function resetGame() {
    setPlayer1(playerFactory(player1.name, player1.player));
    setPlayer2(playerFactory(player2.name, player2.player));
    setGameOver(false);
    setWinner(null);
  }

  return (
    <div>
      <div>
        {winner ? <h1>{winner} wins the game!</h1> : null}
        {winner ? <button onClick={resetGame}>Start a new game</button> : null}
      </div>
      <button
        disabled={gameOver}
        onClick={() => handleNewPoint(setPlayer1, setPlayer2)}
      >
        Score player 1
      </button>
      <button
        disabled={gameOver}
        onClick={() => handleNewPoint(setPlayer2, setPlayer1)}
      >
        Score player 2
      </button>
      <PlayerScoreRow
        name={player1.name}
        points={player1.points}
        displayScore={player1.displayScore}
      />
      <PlayerScoreRow
        name={player2.name}
        points={player2.points}
        displayScore={player2.displayScore}
      />
    </div>
  );
}

export default Scoreboard;
