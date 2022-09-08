import { useState } from "react";
import { IPlayers } from "../../types/player";
import PlayerScoreRow from "./PlayerScoreRow";

function Scoreboard() {
  const defaultPlayer = {
    name: "",
    points: 0,
  };
  const [players, setPlayers] = useState<IPlayers>({
    player1: { ...defaultPlayer, name: "Player 1" },
    player2: { ...defaultPlayer, name: "Player 2" },
  });

  const [currentPlayer, setCurrentPlayer] = useState<string>("player1");

  return (
    <div>
      <PlayerScoreRow name={players.player1.name} />
      <PlayerScoreRow name={players.player2.name} />
    </div>
  );
}

export default Scoreboard;
