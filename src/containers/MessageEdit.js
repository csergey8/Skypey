import React from 'react'
import store from '../store';
import { editText, editMessage, endEditMessage } from '../actions';
import './MessageInput.css';




const MessageEdit = ({ value }) => {
  const state = store.getState();
  console.log(state);

  const handleSubmit = (e) => {
    e.preventDefault();
    store.dispatch(editMessage(state.editing));
    store.dispatch(endEditMessage());
  }

  const handleChange = (e) => {
    store.dispatch(editText(e.target.value, state.editing));
  }

  return (
    <form className="Message" onSubmit={handleSubmit}>
      <input
        className="Message__input"
        value={value}
        onChange={handleChange}
        placeholder="write a message"
      />
    </form>
  )
}

export default MessageEdit;
