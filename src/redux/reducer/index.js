import { combineReducers } from "redux";
import cards from "./cards";
import contacts from "./contacts";
import isLoggedIn from "./authentication";
import user from "./user";

export default combineReducers({
  cards,
  contacts,
  isLoggedIn,
  user
});
