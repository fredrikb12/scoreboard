import React, { useEffect, useState } from "react";
import { IPlayer, IPlayers } from "../../types/player";
import { playerHasWon, pointConverter } from "../../utils/pointConverter";
import PlayerScoreRow from "./PlayerScoreRow";

function Scoreboard() {
  const defaultPlayer = {
    name: "",
    points: 0,
    displayScore: "0",
    player: "",
    lastScorer: false,
  };
  const [player1, setPlayer1] = useState<IPlayer>({
    ...defaultPlayer,
    name: "Player 1",
    player: "player1",
  });
  const [player2, setPlayer2] = useState<IPlayer>({
    ...defaultPlayer,
    name: "Player 2",
    player: "player2",
  });
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

  function handleNewPoint(
    setScoringPlayer: React.Dispatch<React.SetStateAction<IPlayer>>,
    setOtherPlayer: React.Dispatch<React.SetStateAction<IPlayer>>
  ) {
    setScoringPlayer((prevState) => {
      return { ...prevState, points: prevState.points + 1, lastScorer: true };
    });
    setOtherPlayer((prevState) => {
      return { ...prevState, lastScorer: false };
    });
  }

  function resetGame() {}

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
