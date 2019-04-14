import { SET_CONTACTS, CREATE_CONTACT } from "../constants";

const initialState = {
  students: [],
  professors: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_CONTACTS:
      return action.contacts;
    case CREATE_CONTACT:
        return {
          ...state,
          [action.contact.company]: [...state[action.contact.company], action.contact]
        }
    default:
      return state;
  }
};
