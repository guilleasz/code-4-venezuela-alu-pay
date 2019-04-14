import { SET_CARDS } from '../constants'
import api from '../../config/api';

export const setCards = cards => ({
  type: SET_CARDS,
  cards
}) 

export const fetchCards = () => (dispatch) =>
  api.get('/cards')
    .then(({ data }) => dispatch(setCards(data)))
