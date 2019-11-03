const initState = {
  squares: Array(9).fill(null)
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case "SAVE_HISTORY":
      console.log("save history");
      return state;
    default:
      return state;
  }
};

export default reducer;
