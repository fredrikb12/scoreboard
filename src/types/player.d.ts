export interface IPlayer {
  name: string;
  points: number;
  displayScore: string;
  player: EitherPlayer;
  lastScorer: boolean;
}

export interface IPlayers {
  player1: IPlayer;
  player2: IPlayer;
}

export type EitherPlayer = "player1" | "player2";
