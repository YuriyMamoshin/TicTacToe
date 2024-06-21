import Board from "components/Side/Board/Board";
import Chat from "components/Side/Chat/Chat";
import MessageLine from "components/Side/MessageLine/MessageLine";

export default function Side({ player }) {
  return (
    <section className={`side side-${player} flex-center`}>
      <MessageLine player={player} />
      <Board player={player} />
      <Chat player={player}></Chat>
    </section>
  );
}
