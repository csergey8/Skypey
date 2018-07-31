import React from 'react';
import store from '../store';
import Header from '../components/Header';
import Chats from '../components/Chats';
import MessageInput from '../containers/MessageInput';
import _ from 'lodash';

const ChatWindow = ({ activeUserId }) => {
  const state = store.getState();
  const activeUser = state.contacts.contacts[activeUserId];
  const activeMsgs = state.messages[activeUserId];
  const { typing } = state;
  const messages = _.values(activeMsgs);
  console.log(messages);

  return (
    <div className="ChatWindow">
      <Header user={activeUser} />
      <Chats user={activeUser} messages={messages}/>
      <MessageInput value={typing} />
    </div>
  )
}


export default ChatWindow;
