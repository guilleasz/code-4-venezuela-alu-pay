import { combineReducers } from "redux";
import cards from "./cards";
import contacts from "./contacts";
import token from "./authentication";

export default combineReducers({
  cards,
  contacts,
  token,
});
