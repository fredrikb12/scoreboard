import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import PlayerScoreRow from "../components/scoreboard/PlayerScoreRow";

it("renders elements displaying the name and display score", () => {
  const props = {
    name: "Test user",
    displayScore: "40",
  };
  render(<PlayerScoreRow {...props} />);
  expect(screen.getByText(/Test user/)).toBeInTheDocument();
  expect(screen.getByText(/40/)).toBeInTheDocument();
});
