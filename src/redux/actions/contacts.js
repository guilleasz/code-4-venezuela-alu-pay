import { SET_CONTACTS } from '../constants'
import axios from 'axios';

export const setContacts = contacts => ({
  type: SET_CONTACTS,
  contacts,
})

export const fetchContacts = () => dispatch => 
  axios.get('/contacts')
    .then(({ data }) => dispatch(setContacts(data)))
