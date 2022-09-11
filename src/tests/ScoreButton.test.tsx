import { render, screen } from "@testing-library/react";
import ScoreButton from "../components/scoreboard/ScoreButton/ScoreButton";
import userEvent from "@testing-library/user-event";

test("calls onclick function", async () => {
  const props = {
    name: "Player",
    disabled: false,
    handleClick: jest.fn(),
  };
  const user = userEvent.setup();
  render(<ScoreButton {...props} />);
  const button = screen.getByRole("button");
  await user.click(button);
  expect(props.handleClick).toHaveBeenCalledTimes(1);
  await user.click(button);
  expect(props.handleClick).toHaveBeenCalledTimes(2);
});
