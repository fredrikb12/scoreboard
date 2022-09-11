export interface IPlayer {
  name: string;
  points: number;
  displayScore: string;
  lastScorer: boolean;
}

export interface IPlayers {
  player1: IPlayer;
  player2: IPlayer;
}
