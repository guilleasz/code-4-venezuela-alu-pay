import { LOG_IN } from "../constants";
import uphold from '../../uphold-sdk'


export const setLogin = (isLoggedIn) => ({
  type: LOG_IN,
  isLoggedIn
})

export const authenticate = code => dispatch => {
  if (code) {
    return uphold.authorize(code)
      .then(() => dispatch(setLogin(true)))
      .catch(() => {
        dispatch(setLogin(false))
      })
  } else {
    return uphold.getMe()
      .then(() => dispatch(setLogin(true)))
      .catch(() =>  {
        dispatch(setLogin(false))
      })
  }
}
