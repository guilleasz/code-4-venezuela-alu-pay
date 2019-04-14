import { SET_CONTACTS, CREATE_CONTACT } from "../constants";
import uphold from "../../uphold-sdk";

export const setContacts = contacts => ({
  type: SET_CONTACTS,
  contacts
});

export const createContactSucces = (contact) => ({
  type: CREATE_CONTACT,
  contact,
});

export const fetchContacts = () => dispatch => {
  uphold
    .getContacts()
    .then(data => {
      const contactsList = data.reduce(
        (lists, contact, index) => {
          const contactType = contact.company.toLowerCase();
          delete contact.company;
          lists[contactType].push(contact);
          return lists;
        },
        { students: [], professors: [] }
      );
      dispatch(setContacts(contactsList));
    })
    .catch(e => console.log(e));
};

export const createContact = body => dispatch => {
  return uphold
    .createContact(body)
    .then((contact) => {
      dispatch(createContactSucces(contact));
    })
    .catch(e => console.log(e));
};
