const INITIAL_STATE = {
  isLoading: true,
  rewards: ""
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SHOW_LOADER":
      return { ...state, isLoading: action.payload };
    case "SHOW_REWARDS":
      return { ...state, rewards: action.payload };
    default:
      return state;
  }
};
