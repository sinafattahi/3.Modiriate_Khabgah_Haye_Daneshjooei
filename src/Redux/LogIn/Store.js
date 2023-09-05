import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'
import { userReducers } from "./userReducers";
import thunkMiddleware from 'redux-thunk';

const store = createStore(userReducers, composeWithDevTools(applyMiddleware(thunkMiddleware)));

export default store;