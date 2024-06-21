import ScoreBar from "components/Header/ScoreBar/ScoreBar";
import ResetButton from "components/Header/ResetButton/ResetButton";
import Player from "components/Header/Player/Player";
export default function Header() {
  return (
    <header className="header">
      <Player>Player 1</Player>
      <div className="score-container flex-center">
        <ScoreBar />
        <ResetButton />
      </div>
      <Player>Player 2</Player>
    </header>
  );
}
