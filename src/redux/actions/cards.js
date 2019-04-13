import { SET_CARDS } from '../constants'
import axios from 'axios';
import { dispatch } from 'rxjs/internal/observable/range';

export const setCards = cards => ({
  type: SET_CARDS,
  cards
}) 

export const fetchCards = () =>
  axios.get('/cards')
    .then(({ data }) => dispatch(setCards(data)))
