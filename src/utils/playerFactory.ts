import { IPlayer } from "../types/player";

export function playerFactory(name: string, player: string): IPlayer {
  return {
    name: name,
    player: player,
    lastScorer: false,
    points: 0,
    displayScore: "",
  };
}
