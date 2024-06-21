export default function ChatMessage({ message, time, style }) {
  return (
    <article className={`chat__message ${style}`}>
      <p className="chat__text">{message}</p>

      <p className="chat__time">{time}</p>
    </article>
  );
}
