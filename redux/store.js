import {  applyMiddleware, compose,createStore } from 'redux';
// import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const initialState = {};
const thunk_middleware = [thunk];
const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(...thunk_middleware)
);

export default store;