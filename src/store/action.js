export const updateSquares = squaresStatus => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    console.log(squaresStatus);
    // const firestore = getFirestore();
    // firestore
    //   .collection("RepoSearchHistory")
    //   .add({})
    //   .then(() => {
    // dispatch({ type: "SAVE_HISTORY", history });
    //   })
    //   .catch(err => {
    //     dispatch({ type: "SAVE_HISTORY_ERROR", err });
    //   });
  };
};

export const restartStatus = () => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    console.log("進入 action");

    // const firestore = getFirestore();
    // firestore
    //   .collection("RepoSearchHistory")
    //   .add({})
    //   .then(() => {
    // dispatch({ type: "SAVE_HISTORY", history });
    //   })
    //   .catch(err => {
    //     dispatch({ type: "SAVE_HISTORY_ERROR", err });
    //   });
  };
};
