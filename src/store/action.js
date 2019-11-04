export const updateSquares = Squares => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    dispatch({ type: "UPDATE_STATUS", Squares });
  };
};

export const restartStatus = originStatus => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    console.log("reset status 進入 action");

    dispatch({ type: "RESTART_STATUS", originStatus });
  };
};
