import { SET_CARDS } from '../constants'
import uphold from '../../uphold-sdk';


export const setCards = cards => ({
  type: SET_CARDS,
  cards
}) 

export const fetchCards = () => dispatch =>
  uphold.getCards()
    .then(({ items }) => dispatch(setCards(items)))
