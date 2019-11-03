import React, { useState, useEffect } from "react";
import Square from "./Square";
import { connect } from "react-redux";
import { restartStatus } from "../store/action";

// class Board extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       squares: Array(9).fill(null),
//       xIsNext: true
//     };
//   }
//   handleClick = i => {
//     const squares = this.state.squares.slice();
//     if (calculateWinner(squares) || squares[i]) {
//       return;
//     }
//     squares[i] = this.state.xIsNext ? "X" : "O";
//     this.setState({
//       squares: squares,
//       xIsNext: !this.state.xIsNext
//     });
//   };

//   renderSquare = i => {
//     return (
//       <Square
//         value={this.state.squares[i]}
//         onClick={() => this.handleClick(i)}
//       />
//     );
//   };

//   restart = () => {
//     this.setState({ squares: Array(9).fill(null), xIsNext: true });
//   };

//   render() {
//     const winner = calculateWinner(this.state.squares);
//     let status;
//     if (winner) {
//       status = "Winner: " + winner;
//     } else {
//       status = "Next player: " + (this.state.xIsNext ? "X" : "O");
//     }

//     return (
//       <>
//         <div className="status">{status}</div>
//         <div className="board-row">
//           {this.renderSquare(0)}
//           {this.renderSquare(1)}
//           {this.renderSquare(2)}
//         </div>
//         <div className="board-row">
//           {this.renderSquare(3)}
//           {this.renderSquare(4)}
//           {this.renderSquare(5)}
//         </div>
//         <div className="board-row">
//           {this.renderSquare(6)}
//           {this.renderSquare(7)}
//           {this.renderSquare(8)}
//         </div>
//         <button onClick={this.restart} className="restart">
//           Restart The Game!
//         </button>
//       </>
//     );
//   }
// }

const Board = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const [mask, setMask] = useState(false);

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

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else if (isBoardFull(squares)) {
    status = "Tie ";
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }
  useEffect(() => {
    if (winner) {
      setMask(true);
    } else if (isBoardFull(squares)) {
      setMask(true);
    }
  });

  return (
    <>
      <div>
        {mask ? (
          <div className="mask">
            {status}
            <button
              className="restart"
              onClick={() => {
                setSquares(Array(9).fill(null));
                setXIsNext(true);
                setMask(false);
              }}
            >
              Restart The Game!
            </button>
          </div>
        ) : null}{" "}
      </div>
      <div className="status">{status}</div>
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
      {/* <button
          onClick={() => {
            setSquares(Array(9).fill(null));
            setXIsNext(true);
            setMask(false);
          }}
          className="restart"
        >
          Restart The Game!
        </button> */}
    </>
  );
};

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
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

const mapStateToProps = state => {
  return {
    // history: state.history.history
  };
};

const mapDispatchToProps = dispatch => {
  return {
    restartStatus: () => dispatch(restartStatus())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Board);
