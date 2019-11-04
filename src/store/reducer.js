const initState = {
  squares: Array(9).fill(null)
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case "UPDATE_STATUS": {
      console.log("change status");
      return {
        ...state,
        squares: action.Squares
      };
    }
    case "RESTART_STATUS":
      console.log("save history");
      return {
        ...state,
        squares: Array(9).fill(null)
      };
    default:
      return state;
  }
};

export default reducer;
