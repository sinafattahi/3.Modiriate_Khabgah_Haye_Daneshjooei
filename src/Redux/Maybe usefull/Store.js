import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'
import { userReducers } from "./userReducers";
import { logger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

const initialState = {};
const store = createStore(userReducers, composeWithDevTools(applyMiddleware(thunkMiddleware)));

export default store;