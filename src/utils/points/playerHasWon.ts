export function playerHasWon(p1Points: number, p2Points: number) {
  let leader, p2;
  leader = p1Points > p2Points ? p1Points : p2Points;
  p2 = p1Points > p2Points ? p2Points : p1Points;

  if (leader > 3 && leader - p2 >= 2) {
    return true;
  } else {
    return false;
  }
}
