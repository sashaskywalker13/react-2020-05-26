import { v4 as uuidv4 } from 'uuid';
import { ADDREVIEWS } from '../constants';

export default (store) => (next) => (action) => {
  if (action.type === ADDREVIEWS) {
    action.id = uuidv4();
    action.userId = uuidv4();
  }
  next(action);
};
