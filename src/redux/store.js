import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './reducer';
import logger from './middleware/logger';
import addReviews from './middleware/addReviews';

export default createStore(
  reducer,
  composeWithDevTools(applyMiddleware(logger, addReviews))
);
