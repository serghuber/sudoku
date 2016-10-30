import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store';
import App from './components/App';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { startNewGame } from './actions/GameActions';

import './css/style.css';

injectTapEventPlugin();

const store = configureStore();

store.dispatch(startNewGame('easy'))

ReactDOM.render(
  <Provider store={store}><App /></Provider>,
  document.getElementById('root')
);
