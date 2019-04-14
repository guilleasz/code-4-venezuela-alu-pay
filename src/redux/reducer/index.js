import { combineReducers } from "redux";
import cards from "./cards";
import contacts from "./contacts";
import authentication from "./authentication";

export default combineReducers({
  cards,
  contacts,
  authentication
});
