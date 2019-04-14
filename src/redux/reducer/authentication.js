import { LOG_IN } from "../constants";

const initialState = false
export default (state = initialState, action) => {
  switch (action.type) {
    case LOG_IN:
      return action.isLoggedIn
    default:
      return state;
  }
};
