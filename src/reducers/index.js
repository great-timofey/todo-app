import { combineReducers } from 'redux';
import todos from './todos';
import filters from './filters';
import priority from './priority';

export default combineReducers({
  todos,
  filters,
  priority
});
