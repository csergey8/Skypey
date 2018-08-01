import { SET_ACTIVE_USER_ID, SET_TYPING_VALUE, SEND_MESSAGE, DELETE_MESSAGE, START_EDIT_MESSAGE, END_EDIT_MESSAGE, EDIT_MESSAGE, EDIT_TEXT } from './constants/action-types';
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

export const startEditMessage = (msgNum, userId, text ) => ({
  type: START_EDIT_MESSAGE,
  payload: {
    msgNum,
    userId,
    text
  }
})

export const endEditMessage = () => ({
  type: END_EDIT_MESSAGE,
  payload: {}
})

export const editText = (text, editing) => ({
  type: EDIT_TEXT,
  payload: {
    text,
    editing
  }
})

export const editMessage = (msg) => ({
  type: EDIT_MESSAGE,
  payload: {
    msg
  }
})