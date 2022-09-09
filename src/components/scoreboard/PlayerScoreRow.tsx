import styled from "styled-components";

interface IProps {
  name: string;
  displayScore: string;
}

const StyledScore = styled.p`
  width: 80px;
  padding: 4px 8px;
  border-radius: 4px;
  background-color: #1b1b1b;
  color: #f32929;
  text-align: center;
`;

function PlayerScoreRow({ name, displayScore }: IProps) {
  return (
    <div>
      <p>{name} </p>
      <StyledScore>{displayScore}</StyledScore>
    </div>
  );
}

export default PlayerScoreRow;
