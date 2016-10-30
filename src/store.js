import { applyMiddleware, createStore } from 'redux';
import reducers from './reducers/GameReducers';

export default function (initialState = {}) {
  return createStore(reducers, initialState);
}
