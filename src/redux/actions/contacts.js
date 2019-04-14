import { SET_CONTACTS } from '../constants'
import uphold from '../../uphold-sdk';

export const setContacts = contacts => ({
  type: SET_CONTACTS,
  contacts,
})

export const fetchContacts = () => dispatch => {
  uphold.getContacts()
    .then((data) => {
      const contactsList = data.reduce((lists, contact) => {
        const contactType = contact.company.toLowerCase();
        delete contact.company 
        lists[contactType].push(contact)
        return lists
      }, { students: [], professors: [] })

      dispatch(setContacts(contactsList))
    })
}
