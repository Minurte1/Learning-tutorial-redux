import { INCREMENT, DECREMENT } from "../action/types";

const INITIAL_STATE = {
  count: 0,
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case INCREMENT:
      console.log("I am running INCREMENT");
      return {
        ...state,
        count: state.count + 1,
      };

    case DECREMENT:
      console.log("I am running DECREMENT");
      return {
        ...state,
        count: state.count - 1,
      };

    default:
      return state;
  }
};

export default reducer;
