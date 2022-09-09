import { StyledScoreButton } from "./ScoreButton.styled";

interface IProps {
  name: string;
  handleClick: () => void;
  disabled: boolean;
}

function ScoreButton({ name, disabled, handleClick }: IProps) {
  return (
    <StyledScoreButton disabled={disabled} onClick={handleClick}>
      {name} <span>+</span>
    </StyledScoreButton>
  );
}

export default ScoreButton;
