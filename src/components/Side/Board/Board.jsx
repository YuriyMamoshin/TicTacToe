import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fillCell,
  flipTurns,
  defineLineClass,
  resetBoard,
} from "components/Side/Board/boardSlice";
import { changeGameStage, changeScore } from "src/appSlice";

import {winCombos} from "src/winCombos";

import Cell from "components/Side/Board/Cell/Cell";
import Line from "components/Side/Board//Line/Line";

export default function Board({ player }) {
  const boardState = useSelector((state) => state.board.boardState);
  const gameStage = useSelector((state) => state.game.gameStage);
  const lineClassState = useSelector((state) => state.board.lineClass);
  const playersTurn = useSelector((state) => state.board.playersTurn);
  const playerSide = player === "1" ? "o" : "x";

  const dispatch = useDispatch();

  useEffect(() => {
    checkWinner();
  }, [boardState]);

  useEffect(() => {
    if (gameStage !== "inProgress") {
      setTimeout(() => {
        dispatch(resetBoard());
        dispatch(changeGameStage("inProgress"));
      }, 5000);
    }
  }, [gameStage]);

  function handleCellClick(cellIndex) {
    if (gameStage !== "inProgress" || boardState[cellIndex]) {
      return;
    }

    dispatch(fillCell(cellIndex));
    dispatch(flipTurns());
  }

  function checkWinner() {
    if (playerSide === playersTurn) {
      return;
    }

    for (const { combo, lineClass } of winCombos) {
      const cellValue1 = boardState[combo[0]];
      const cellValue2 = boardState[combo[1]];
      const cellValue3 = boardState[combo[2]];

      if (
        cellValue1 !== null &&
        cellValue1 === cellValue2 &&
        cellValue1 === cellValue3
      ) {
        dispatch(defineLineClass(lineClass));
        if (cellValue1 === "x") {
          dispatch(changeGameStage("xwins"));
          dispatch(changeScore("x"));
        } else {
          dispatch(changeGameStage("owins"));
          dispatch(changeScore("o"));
        }
        return;
      }
    }

    const isBoardFull = boardState.every((cell) => cell);
    if (isBoardFull) {
      dispatch(changeGameStage("draw"));
    }
  }

  return (
    <section
      className={`board flex-center ${
        playerSide !== playersTurn && "board_hidden"
      }`}
    >
      <article className="board__grid">
        <Cell
          onCellClick={() => handleCellClick(0)}
          cellValue={boardState[0]}
          styles="right-border bottom-border"
        />
        <Cell
          onCellClick={() => handleCellClick(1)}
          cellValue={boardState[1]}
          styles="right-border bottom-border"
        />
        <Cell
          onCellClick={() => handleCellClick(2)}
          cellValue={boardState[2]}
          styles="bottom-border"
        />
        <Cell
          onCellClick={() => handleCellClick(3)}
          cellValue={boardState[3]}
          styles="right-border bottom-border"
        />
        <Cell
          onCellClick={() => handleCellClick(4)}
          cellValue={boardState[4]}
          styles="right-border bottom-border"
        />
        <Cell
          onCellClick={() => handleCellClick(5)}
          cellValue={boardState[5]}
          styles="bottom-border"
        />
        <Cell
          onCellClick={() => handleCellClick(6)}
          cellValue={boardState[6]}
          styles="right-border"
        />
        <Cell
          onCellClick={() => handleCellClick(7)}
          cellValue={boardState[7]}
          styles="right-border"
        />
        <Cell
          onCellClick={() => handleCellClick(8)}
          cellValue={boardState[8]}
          styles=""
        />
      </article>

      <Line lineClass={lineClassState} />
    </section>
  );
}
