import { LOG_IN } from "../constants";
import { setUser } from "../actions/user";
import uphold from "../../uphold-sdk";

export const setLogin = isLoggedIn => ({
  type: LOG_IN,
  isLoggedIn
});

export const logout = () => dispatch => {
  dispatch(setUser());
  dispatch(setLogin(false));
};

export const authenticate = code => dispatch => {
  if (code) {
    return uphold
      .authorize(code)
      .then(() => dispatch(setLogin(true)))
      .catch(() => {
        dispatch(setLogin(false));
      });
  } else {
    return uphold
      .getMe()
      .then(user => {
        dispatch(setUser(user));
        dispatch(setLogin(true));
      })
      .catch(() => {
        dispatch(setUser());
        dispatch(setLogin(false));
      });
  }
};
