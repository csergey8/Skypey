import { START_EDIT_MESSAGE, EDIT_TEXT, END_EDIT_MESSAGE } from '../actions/constants/action-types';

const initalState = {
  isEdit: false,
  msg: null,
  userId: null,
  text: null
}

export default function startEditMsg(state = initalState, action) {
  switch(action.type) {
    case START_EDIT_MESSAGE:
    console.log(action)
      return {
        isEdit: true,
        msg: action.payload.msgNum,
        userId: action.payload.userId,
        text: action.payload.text
      }
    case END_EDIT_MESSAGE:
      return initalState;
    case EDIT_TEXT:
      return {
        isEdit: true,
        text: action.payload.text,
        msg: action.payload.editing.msg,
        userId: action.payload.editing.userId
      }
    default: 
      return state;
  }
  
  
  return state;
}