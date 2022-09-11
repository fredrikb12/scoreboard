import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Scoreboard from "../components/scoreboard/Scoreboard";
import userEvent from "@testing-library/user-event";

it("Renders correct scores", async () => {
  const user = userEvent.setup();
  render(<Scoreboard />);
  const p1Button = screen.getByRole("button", { name: "Player 1 +" });
  const p2Button = screen.getByRole("button", { name: "Player 2 +" });
  await user.click(p1Button);
  const p1Score = screen.getByText("15");
  const p2Score = screen.getByText("Love");
  expect(p1Score).toBeInTheDocument();
  expect(p2Score).toBeInTheDocument();

  await user.click(p2Button);
  await user.click(p2Button);
  expect(p1Score.textContent).toBe("15");
  expect(p2Score.textContent).toBe("30");

  await user.click(p1Button);
  await user.click(p1Button);
  await user.click(p2Button);
  expect(p1Score.textContent).toBe("Deuce");
  expect(p2Score.textContent).toBe("Deuce");

  await user.click(p1Button);
  expect(p1Score.textContent).toBe("Adv");
  expect(p2Score.textContent).toBe("40");

  await user.click(p2Button);
  await user.click(p2Button);
  expect(p1Score.textContent).toBe("40");
  expect(p2Score.textContent).toBe("Adv");

  await user.click(p2Button);
  expect(p1Score.textContent).toBe("Loser");
  expect(p2Score.textContent).toBe("Winner");
});

it("Renders game over component correctly", async () => {
  const user = userEvent.setup();
  render(<Scoreboard />);
  const p1Button = screen.getByRole("button", { name: "Player 1 +" });
  const noRestartButton = screen.queryByRole("button", {
    name: "Start a new game",
  });
  expect(noRestartButton).not.toBeInTheDocument();

  expect(screen.queryByText(/Player 1 wins the game!/)).not.toBeInTheDocument();
  expect(screen.queryByText(/Player 2 wins the game!/)).not.toBeInTheDocument();

  await user.click(p1Button);
  await user.click(p1Button);
  await user.click(p1Button);
  await user.click(p1Button);
  expect(screen.getByText(/Player 1 wins the game!/)).toBeInTheDocument();

  const restartButton = screen.getByRole("button", {
    name: "Start a new game",
  });
  expect(restartButton).toBeInTheDocument();
});

it("Restarts when restart button is pressed", async () => {
  const user = userEvent.setup();
  render(<Scoreboard />);
  const p2Button = screen.getByRole("button", { name: "Player 2 +" });

  await user.click(p2Button);
  await user.click(p2Button);
  await user.click(p2Button);
  await user.click(p2Button);

  const restartButton = screen.getByRole("button", {
    name: "Start a new game",
  });
  await user.click(restartButton);
  expect(screen.queryByText(/Player 1 wins the game!/)).not.toBeInTheDocument();
  expect(screen.queryByText(/Player 2 wins the game!/)).not.toBeInTheDocument();
});
