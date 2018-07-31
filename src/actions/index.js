import { SET_ACTIVE_USER_ID, SET_TYPING_VALUE, SEND_MESSAGE, DELETE_MESSAGE } from './constants/action-types';
import messages from '../reducers/messages';

export const setActiveUserId = id => ({
  type: SET_ACTIVE_USER_ID,
  payload: id
});

export const setTypingValue = value => ({
  type: SET_TYPING_VALUE,
  payload: value
})

export const sendMessage = (message, userId) => ({
  type: SEND_MESSAGE,
  payload: {
    message,
    userId
  }
})

export const deleteMessage = (id, num) => ({
  type: DELETE_MESSAGE,
  payload: {
    id,
    num
  }
})