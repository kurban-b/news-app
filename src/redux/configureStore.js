import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger/src';
import news from './reducers/newsReducer';
import users from './reducers/usersReducer';

const logger = createLogger({
  diff: true,
  collapsed: true,
});

export const store = createStore(
  combineReducers({ users, news }),
  applyMiddleware(thunk, logger),
);
