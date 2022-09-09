import { EitherPlayer } from "../../types/player";

/*interface IConvertedPoints {
  player1: string;
  player2: string;
}*/

// implementing this interface proved tricky, which is why the function currently returns any
// function should always return an object {player1: string, player2: string}

export function pointConverter(
  p1Points: number,
  p2Points: number,
  p1Name: EitherPlayer,
  p2Name: EitherPlayer
): any {
  if (p1Points > 3 && p1Points - p2Points >= 2) {
    return { [p1Name]: "Winner", [p2Name]: "Loser" };
  } else if (p2Points > 3 && p2Points - p1Points >= 2) {
    return { [p2Name]: "Winner", [p1Name]: "Loser" };
  } else if (p1Points >= 3 && p2Points >= 3) {
    if (p1Points > p2Points) {
      return {
        [p1Name]: "Adv",
        [p2Name]: pointsToText(p2Points),
      };
    } else if (p1Points === p2Points) {
      return {
        [p1Name]: "Deuce",
        [p2Name]: "Deuce",
      };
    } else {
      return {
        [p1Name]: pointsToText(p1Points),
        [p2Name]: "Adv",
      };
    }
  } else {
    return {
      [p1Name]: pointsToText(p1Points),
      [p2Name]: pointsToText(p2Points),
    };
  }
}

export function pointsToText(points: number): string {
  switch (points) {
    case 0:
      return "Love";
    case 1:
      return "15";
    case 2:
      return "30";
    case 3:
      return "40";
    default:
      return "40";
  }
}
