import uphold from '../../uphold-sdk'

export const transfer = (contacts, body, cardId) => dispatch => {
  const transactions = contacts.map((contact) => {
    return uphold.createCardTransaction(cardId, { destintation: contact.id, ...body }, true)
  })
  return Promise.all(transactions)
}
