import { createStore } from 'redux';
import reducers from './reducers/GameReducers';

export default (initialState = {}) => createStore(reducers, initialState);
