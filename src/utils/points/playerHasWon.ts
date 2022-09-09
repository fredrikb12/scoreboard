export function playerHasWon(scoringPlayerPoints: number, p2Points: number) {
  if (scoringPlayerPoints > 3 && scoringPlayerPoints - p2Points >= 2) {
    return true;
  } else {
    return false;
  }
}
