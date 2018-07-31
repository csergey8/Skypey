import React from 'react';
import store from '../store';
import './MessageInput.css';
import { setTypingValue, sendMessage } from '../actions';

const MessageInput = ({ value }) => {
 const handleInput = e => {
   store.dispatch(setTypingValue(e.target.value));
 }

 const state = store.getState();

 const handleSubmit = e => {
   e.preventDefault();
   const { typing, activeUserId } = state;
   store.dispatch(sendMessage(typing, activeUserId));
 }
  return (
    <form className="Message" onSubmit={handleSubmit}>
      <input
        className="Message__input"
        onChange={handleInput}
        value={value}
        placeholder="write a message"
      />
    </form>
  )
}

export default MessageInput;
