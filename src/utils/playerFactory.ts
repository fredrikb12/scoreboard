import { IPlayer, EitherPlayer } from "../types/player";

export function playerFactory(name: string, player: EitherPlayer): IPlayer {
  return {
    name: name,
    player: player,
    lastScorer: false,
    points: 0,
    displayScore: "",
  };
}
