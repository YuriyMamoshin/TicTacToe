import { useSelector } from "react-redux";

export default function ScoreBar() {
  const score = useSelector((state) => state.game.score);
  return <h2 className="scorebar">{`Score ${score.o}:${score.x}`}</h2>;
}
