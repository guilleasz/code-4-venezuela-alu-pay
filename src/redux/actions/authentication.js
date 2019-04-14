import { LOG_IN } from "../constants";
import axios from "axios";
import { dispatch } from "rxjs/internal/observable/range";

export const authentication = token => ({
  type: LOG_IN,
  token
});

export const fetchAuthentication = () =>
  axios.get("http://localhost:3001/login").then(({ data }) => {
    localStorage.setItem("token", data.token);
    dispatch(authentication(data.token));
  });
