import React, { Component } from 'react'
import './Chats.css';
import store from '../store';
import { deleteMessage } from '../actions/index';
import Chat from './chat';


// const Chat = ({ message }) => {
//   const { text, is_user_msg } = message;
//   return (
//     <span className={`Chat ${is_user_msg ? "is-user-msg" : ""}`}>{text}</span>
//   );
// };

// class Chat extends Component {
//   constructor(props) {
//     super(props);
//     this.text = this.props.message.text;
//     this.is_user_msg = this.props.message.is_user_msg;
//     this.userId = this.props.user.user_id;
//     this.number = this.props.message.number;
//     this.state = {
//       showDelete: false
//     }
//     this.handleDeleteBtn = this.handleDeleteBtn.bind(this);
//   }
//   handleDeleteBtn() {
//     if(this.is_user_msg) {
//     this.setState({
//       showDelete: !this.state.showDelete
//     });
//   }
//   }
//   handleDeleteMsg = () => {
//     store.dispatch(deleteMessage(this.userId, this.number))
    
//   }

//   render() {
//   return (
//       <span 
//        className={`Chat ${this.is_user_msg ? "is_user_msg" : ""}`}
//        onMouseEnter={this.handleDeleteBtn}
//        onMouseLeave={this.handleDeleteBtn}
//       >
//       {this.text}
//       { this.state.showDelete && <button onClick={this.handleDeleteMsg}>X</button>}
//       </span>
//   );
// }
// }


class Chats extends Component {
  constructor(props) {
    super(props);
    this.chatsRef = React.createRef();
  }
  componentWillReceiveProps() {
    this.forceUpdate();
    this.setState(this.state)
    console.log('RECIEVE');
    console.log(this.props.messages);
  }
  componentDidMount() {
    this.scrollToBottom();
  }
  componentDidUpdate() {
    this.scrollToBottom();
  }
  scrollToBottom() {
    this.chatsRef.current.scrollTop = this.chatsRef.current.scrollHeight;
  }
  render() {
    console.log('RENDEr');
    return (
      <div className="Chats" ref={this.chatsRef}>
        {this.props.messages.map(message => (
          <Chat message={message} key={message.number} user={this.props.user}/>
        ))}
      </div>
    )
  }
}

export default Chats;