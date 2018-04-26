import { ADD_FLASH_MESSAGE, DELETE_FLASH_MESSAGE } from '../actions/types';
import shortid from 'shortid';

export default (state = [], action) => {
  switch(action.type) {
    case ADD_FLASH_MESSAGE:
      return [...state, {...action.payload, id: shortid.generate()}];
    break;
    case DELETE_FLASH_MESSAGE:
      return state.filter(message => message.id !== action.payload);
    break;
    default: return state;
  }
}