export function pointConverter(
  p1Points: number,
  p2Points: number
): { player1: string; player2: string } {
  if (p1Points > 3 && p1Points - p2Points >= 2) {
    return { player1: "Winner", player2: "Loser" };
  } else if (p2Points > 3 && p2Points - p1Points >= 2) {
    return { player2: "Winner", player1: "Loser" };
  } else if (p1Points >= 3 && p2Points >= 3) {
    if (p1Points > p2Points) {
      return {
        player1: "Adv",
        player2: pointsToText(p2Points),
      };
    } else if (p1Points === p2Points) {
      return {
        player1: "Deuce",
        player2: "Deuce",
      };
    } else {
      return {
        player1: pointsToText(p1Points),
        player2: "Adv",
      };
    }
  } else {
    return {
      player1: pointsToText(p1Points),
      player2: pointsToText(p2Points),
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
