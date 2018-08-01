import React, { Component } from 'react';
import store from '../store';
import { deleteMessage, startEditMessage } from '../actions/index';

class Chat extends Component {
  constructor(props) {
    super(props);
    this.text = this.props.message.text;
    this.is_user_msg = this.props.message.is_user_msg;
    this.userId = this.props.user.user_id;
    this.number = this.props.message.number;
    this.state = {
      showDelete: false,
      update: false,
      text: this.props.message.text,
      userId: this.props.user.user_id,
      number: this.props.message.number
    }
    this.handleDeleteBtn = this.handleDeleteBtn.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      text: nextProps.message.text,
      userId: nextProps.user.user_id,
      number: nextProps.message.number
    });
  }
  handleDeleteBtn() {
    if(this.is_user_msg) {
    this.setState({
      showDelete: !this.state.showDelete
    });
  }
  }
  handleDeleteMsg = (e) => {
    e.stopPropagation();
    store.dispatch(deleteMessage(this.state.userId, this.state.number));
  }

  handleEditMsg = () => {
    console.log(this.state.number, this.state.userId, this.state.text);
    store.dispatch(startEditMessage(this.state.number, this.state.userId, this.state.text));
  }

  render() {
  return (
      <span 
       className={`Chat ${this.is_user_msg ? "is_user_msg" : ""}`}
       onMouseEnter={this.handleDeleteBtn}
       onMouseLeave={this.handleDeleteBtn}
       onClick={this.handleEditMsg}
      >
      {this.state.text}
      { this.state.showDelete && <button onClick={this.handleDeleteMsg}>X</button>}
      </span>
  );
}
}

export default Chat;