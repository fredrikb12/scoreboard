import styled from "styled-components";

export const StyledScoreboard = styled.div`
  display: grid;
  gap: 30px;
  grid-template-rows: 50px 50px;
  min-width: 200px;
  margin-top: 35px;
  margin-bottom: 35px;
  border: 1px solid black;
  padding: 30px 50px;
  background-color: #0f2f3d;
  color: #f5f4e7;
  font-size: 1.5rem;

  & > div {
    display: flex;
    gap: 50px;
    justify-content: space-between;
    align-items: center;
  }
`;
