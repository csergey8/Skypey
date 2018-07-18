import React, { Component } from 'react';
import Sidebar from './Sidebar/Sidebar';
import Main from './Main/Main';
import store from './store';
import _ from 'lodash';
import './App.css';

class App extends Component {
  render() {
    const { contacts } = store.getState();
    console.log(contacts);
    return (
      <div className="App">
        <Sidebar contacts={_.values(contacts)} />
        <Main />
      </div>
    );
  }
}

export default App;
