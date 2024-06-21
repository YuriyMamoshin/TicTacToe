import { useDispatch } from "react-redux";
import { resetBoard } from "components/Side/Board/boardSlice";
import { resetGame } from "src/appSlice";
import { resetChat } from "components/Side/Chat/chatSlice";

export default function ReserButton() {
  const dispatch = useDispatch();

  function handleReset() {
    dispatch(resetBoard());
    dispatch(resetGame());
    dispatch(resetChat());
  }

  return (
    <button onClick={handleReset} className="reset-button">
      Reset
    </button>
  );
}
