import React from "react";

function Square(props) {
  return (
    <button className="square" id={props.value} onClick={props.onClick}>
      {props.value}
    </button>
  );
}
export default Square;
