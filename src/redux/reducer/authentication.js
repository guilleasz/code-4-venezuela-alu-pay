import { LOG_IN } from "../constants";

const initialState = localStorage.getItem('token')

export default (state = initialState, action) => {
  switch (action.type) {
    case LOG_IN:
      return action.token
    default:
      return state;
  }
};
