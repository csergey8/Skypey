import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import store from './store';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


const render = () => {
  fancyLog();
  return ReactDOM.render(<App />, document.getElementById('root'));
}

const fancyLog = () => {
  console.log("%c Rendered with 👉 👉👇", "background: purple; color: #FFF");
  console.log(store.getState());
}

render();
store.subscribe(render);


registerServiceWorker();
