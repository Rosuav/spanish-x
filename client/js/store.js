const thunk = require('redux-thunk').default;
import { createStore, applyMiddleware } from 'redux';
const reducers = require('./reducers/reducers');

const store = createStore(reducers.translatorReducer, applyMiddleware(thunk));

export default store;
