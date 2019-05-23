const namesReducerDefaultState = {
  names: ""
}

export default (state = namesReducerDefaultState, action) => {
  switch(action.type) {
    case "SET_NAMES":
      return {
        ...state,
        names: action.names
      }
    default:
      return state;
  }
}