import { createStore, applyMiddleware } from 'redux';
import reducer from '../reducer';
import logger from 'redux-logger';

const enchancer = applyMiddleware(logger);
const store = createStore(reducer, {}, enchancer);

export default store;