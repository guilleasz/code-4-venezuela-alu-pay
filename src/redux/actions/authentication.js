import { LOG_IN } from "../constants";

export const setToken = token => {
  if (token) {
    localStorage.setItem('token', token)
  }
  return {
    type: LOG_IN,
    token: localStorage.getItem('token')
  }
} 
