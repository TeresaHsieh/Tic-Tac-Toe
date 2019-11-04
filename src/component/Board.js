import React, { useState, useEffect } from "react";
import Square from "./Square";

function calculateWinner(squares) {
  const possibleWinLines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < possibleWinLines.length; i++) {
    const [a, b, c] = possibleWinLines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

function isBoardFull(squares) {
  for (let i = 0; i < squares.length; i++) {
    if (squares[i] == null) {
      return false;
    }
  }
  return true;
}

const Board = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const [mask, setMask] = useState(false);

  useEffect(() => {
    if (winner) {
      setMask(true);
    } else if (isBoardFull(squares)) {
      setMask(true);
    }
  });

  function handleClick(i) {
    const Squares = squares.slice();
    if (calculateWinner(Squares) || Squares[i]) {
      return;
    }
    Squares[i] = xIsNext ? "X" : "O";
    setSquares(Squares);
    setXIsNext(!xIsNext);
  }

  function renderSquare(i) {
    return (
      <Square
        value={squares[i]}
        onClick={() => {
          handleClick(i);
        }}
      />
    );
  }

  function resetGame() {
    setSquares(Array(9).fill(null));
    setXIsNext(true);
    setMask(false);
  }

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Winner : " + winner;
  } else if (isBoardFull(squares)) {
    status = "Tie ";
  } else {
    status = "Next player :  " + (xIsNext ? "X" : "O");
  }

  return (
    <>
      <div>
        {mask ? (
          <div className="mask">
            <div className="result"> {status}</div>
            <button className="restart" onClick={resetGame}>
              Restart The Game!
            </button>
          </div>
        ) : null}
      </div>
      <div className="status">{mask ? null : status}</div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </>
  );
};

export default Board;
