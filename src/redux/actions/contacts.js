import { SET_CONTACTS } from '../constants'
import api from '../../config/api';

export const setContacts = contacts => ({
  type: SET_CONTACTS,
  contacts,
})

export const fetchContacts = () => dispatch => 
  api.get('/contacts')
    .then(({ data }) => dispatch(setContacts(data)))
