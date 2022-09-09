export function pointConverter(
  firstPlayerPoints: number,
  secondPlayerPoints: number,
  firstPlayerName: string,
  secondPlayerName: string
): any /*{ player1: string; player2: string }*/ {
  console.log(firstPlayerPoints, secondPlayerPoints);
  if (firstPlayerPoints > 3 && firstPlayerPoints - secondPlayerPoints >= 2) {
    return { [firstPlayerName]: "Winner", [secondPlayerName]: "Loser" };
  } else if (firstPlayerPoints >= 3 && secondPlayerPoints >= 3) {
    if (firstPlayerPoints > secondPlayerPoints) {
      return {
        [firstPlayerName]: "Adv",
        [secondPlayerName]: pointsToText(secondPlayerPoints),
      };
    } else if (firstPlayerPoints === secondPlayerPoints) {
      return {
        [firstPlayerName]: "Deuce",
        [secondPlayerName]: "Deuce",
      };
    } else {
      return {
        [firstPlayerName]: pointsToText(firstPlayerPoints),
        [secondPlayerName]: "Adv",
      };
    }
  } else {
    return {
      [firstPlayerName]: pointsToText(firstPlayerPoints),
      [secondPlayerName]: pointsToText(secondPlayerPoints),
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
      return "Love";
  }
}

export function playerHasWon(scoringPlayerPoints: number, p2: number): boolean {
  if (scoringPlayerPoints > 3 && scoringPlayerPoints - p2 >= 2) {
    return true;
  } else {
    return false;
  }
}
