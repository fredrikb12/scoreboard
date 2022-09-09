import { pointConverter } from "../utils/points/pointConverter";

describe("win conditions", () => {
  it("correctly determines player 1 win", () => {
    const result = pointConverter(4, 0, "player1", "player2");
    expect(result.player1).toBe("Winner");
    expect(result.player2).toBe("Loser");
  });

  it("correctly determines player 2 win", () => {
    const result = pointConverter(2, 4, "player1", "player2");
    expect(result.player2).toBe("Winner");
    expect(result.player1).toBe("Loser");
  });
});

describe("less than 4 points", () => {
  it("correctly returns 'Love'", () => {
    const result = pointConverter(0, 0, "player1", "player2");
    expect(result.player1).toBe("Love");
    expect(result.player2).toBe("Love");
  });

  it("correctly returns '15'", () => {
    const result = pointConverter(1, 1, "player1", "player2");
    expect(result.player1).toBe("15");
    expect(result.player2).toBe("15");
  });

  it("correctly returns '30'", () => {
    const result = pointConverter(2, 2, "player1", "player2");
    expect(result.player1).toBe("30");
    expect(result.player2).toBe("30");
  });
});

describe("4 or more points", () => {
  it("correctly determines advantage for player 1", () => {
    const result = pointConverter(4, 3, "player1", "player2");
    expect(result.player1).toBe("Adv");
    expect(result.player2).toBe("40");
  });

  it("correctly determines advantage for player 2", () => {
    const result = pointConverter(3, 4, "player1", "player2");
    expect(result.player1).toBe("40");
    expect(result.player2).toBe("Adv");
  });

  it("correctly returns 'deuce' for both players", () => {
    const result = pointConverter(4, 4, "player1", "player2");
    expect(result.player1).toBe("Deuce");
    expect(result.player2).toBe("Deuce");

    const result2 = pointConverter(8, 8, "player1", "player2");
    expect(result2.player1).toBe("Deuce");
    expect(result2.player2).toBe("Deuce");
  });
});
