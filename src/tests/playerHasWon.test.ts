import { playerHasWon } from "../utils/points/playerHasWon";

describe("win conditions", () => {
  it("correctly determines player 1 win", () => {
    const result = playerHasWon(4, 1);
    expect(result).toBe(true);

    const result2 = playerHasWon(6, 4);
    expect(result2).toBe(true);
  });
  it("correctly determines player 2 win", () => {
    const result = playerHasWon(1, 4);
    expect(result).toBe(true);

    const result2 = playerHasWon(5, 7);
    expect(result2).toBe(true);
  });
});

describe("no win conditions", () => {
  it("works below 3 points", () => {
    const result = playerHasWon(2, 3);
    expect(result).toBe(false);

    const result2 = playerHasWon(3, 0);
    expect(result2).toBe(false);
  });

  it("works above 3 points", () => {
    const result = playerHasWon(4, 3);
    expect(result).toBe(false);

    const result2 = playerHasWon(6, 5);
    expect(result2).toBe(false);

    const result3 = playerHasWon(7, 8);
    expect(result3).toBe(false);

    const result4 = playerHasWon(9, 9);
    expect(result4).toBe(false);
  });
});
