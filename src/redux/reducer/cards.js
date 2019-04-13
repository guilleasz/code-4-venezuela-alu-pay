import { SET_CARDS } from '../constants'

export default (state = [], action) => {
  switch(action.type) {
    case SET_CARDS:
      return action.cards
    default:
      return state
  }
}

