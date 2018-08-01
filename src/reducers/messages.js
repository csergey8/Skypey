import { getMessages } from '../static-data';
import { SEND_MESSAGE, DELETE_MESSAGE, EDIT_MESSAGE } from '../actions/constants/action-types';
import _ from 'lodash';
import user from './user';

export default function messages(state = getMessages(10), action) {
  switch (action.type) {
    case SEND_MESSAGE:
    const { message, userId } = action.payload;
    let allUserMsg = state[userId];
    const number = +_.keys(allUserMsg).pop() + 1;
      return {
        ...state,
        [userId]: {
          ...allUserMsg,
          [number]: {
            number,
            text: message,
            is_user_msg: true
          }
        }
      };
      case EDIT_MESSAGE:
      const { text, msg } = action.payload.msg;
      const uId = action.payload.msg.userId; 
      allUserMsg = state[uId];
      console.log(uId, text, msg, allUserMsg);
        return {
          ...state,
          [uId]: {
            ...allUserMsg,
            [msg]: {
              msg,
              text,
              is_user_msg: true
            }
          }
        }
      case DELETE_MESSAGE:
      const { id, num } = action.payload;
      const userMsg = state[id];
      console.log(state, id);
      delete userMsg[num];
      console.log(userMsg);
        return {
          ...state,
          [id]: {
            ...userMsg
          }
        }
    default: 
      return state;
  }
}