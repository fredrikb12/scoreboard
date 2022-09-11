import React from "react";
import { IPlayer } from "../../types/player";

export function handleNewPoint(
  setScoringPlayer: React.Dispatch<React.SetStateAction<IPlayer>>
) {
  setScoringPlayer((prevState) => {
    return { ...prevState, points: prevState.points + 1 };
  });
}
