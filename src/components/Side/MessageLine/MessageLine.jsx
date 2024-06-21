import { useSelector } from "react-redux";

export default function MessageLine({ player }) {
  const gameStage = useSelector((state) => state.game.gameStage);
  const boardState = useSelector((state) => state.board.boardState);
  const playersTurn = useSelector((state) => state.board.playersTurn);

  const isBoardEmpty = boardState.every((cell) => !cell);

  const playerSide = player === "1" ? "o" : "x";

  const winMessage = (
    <h2 className="board__message board__message_win">You win!</h2>
  );
  const lostMessage = (
    <h2 className="board__message board__message_lost">You lost!</h2>
  );

  switch (gameStage) {
    case "draw":
      return <h2 className="board__message">Draw</h2>;
    case "xwins":
      if (playerSide === "o") {
        return lostMessage;
      } else {
        return winMessage;
      }
    case "owins":
      if (playerSide === "o") {
        return winMessage;
      } else {
        return lostMessage;
      }
    default:
      return (
        <h2 className="board__message">
          {isBoardEmpty && "Game started! "}
          {playerSide === playersTurn
            ? "Your turn:"
            : "Wait for your opponent."}
        </h2>
      );
  }
}
