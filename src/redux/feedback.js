import * as ActionTypes from "./ActionTypes";

export const Feedback = (state = null, action) => {
  switch (action.type) {
    case ActionTypes.SHOW_FEEDBACK:
      console.log(action.payload);
      state = JSON.stringify(action.payload);
      return state;
    default:
      return state;
  }
};
