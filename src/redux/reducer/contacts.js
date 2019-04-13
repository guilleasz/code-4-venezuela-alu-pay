import { SET_CONTACTS } from '../constants'

const initialState = {
  students: [],
  professors: []
}

export default (state = initialState, action) => {
  switch(action.type) {
    case SET_CONTACTS:
      return action.contacts
    default:
      return state
  }
}

