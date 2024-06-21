export default function Cell({ cellValue, styles, onCellClick }) {
  return (
    <div className={`cell flex-center ${styles}`} onClick={onCellClick}>
      {cellValue && (
        <img
          src={`src/assets/images/${cellValue}.svg`}
          alt=""
          className="board__image"
        />
      )}
    </div>
  );
}
