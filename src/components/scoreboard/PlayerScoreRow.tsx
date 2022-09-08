interface IProps {
  name: string;
}

function PlayerScoreRow({ name }: IProps) {
  return (
    <div style={{ display: "flex" }}>
      <p>Name: {name} </p>
    </div>
  );
}

export default PlayerScoreRow;
