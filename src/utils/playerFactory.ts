import { IPlayer } from "../types/player";

export function playerFactory(name: string): IPlayer {
  return {
    name: name,
    lastScorer: false,
    points: 0,
    displayScore: "",
  };
}
