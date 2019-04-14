import uphold from '../../uphold-sdk'

export const transfer = (contacts, body, cardId) => dispatch => {
  const transactions = contacts.map((contact) => {
    console.log(contact.emails[0])
    return uphold.createCardTransaction(cardId, { destination: contact.emails[0], ...body }, true)
  })
  return Promise.all(transactions)
}
