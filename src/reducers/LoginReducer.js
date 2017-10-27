const INITIAL_STATE = {
  showErrorMessage:null
}

export default (state=INITIAL_STATE,action) => {
  switch (action.type) {
    case "SHOW_ERROR_MESSAGE":
      return{ ...state,showErrorMessage:action.payload }
    default:
      return state;
  }
}
