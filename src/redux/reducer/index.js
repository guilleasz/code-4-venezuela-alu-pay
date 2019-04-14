import { combineReducers } from "redux";
import cards from "./cards";
import contacts from "./contacts";
import isLoggedIn from "./authentication";

export default combineReducers({
  cards,
  contacts,
  isLoggedIn,
});
