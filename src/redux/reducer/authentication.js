import { LOG_IN } from "../constants";

const initialState = {
  isLoggedIn: true
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOG_IN:
      return {
        ...state,
        isLoggedIn: action.token
      };
    default:
      return state;
  }
};
