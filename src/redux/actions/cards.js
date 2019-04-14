import { SET_CARDS } from '../constants'
import api from '../../config/api';
import { dispatch } from 'rxjs/internal/observable/range';

export const setCards = cards => ({
  type: SET_CARDS,
  cards
}) 

export const fetchCards = () =>
  api.get('/cards')
    .then(({ data }) => dispatch(setCards(data)))
