import { combineReducers } from 'redux';
import todoapp from './todoapp';

const reducer = combineReducers({
  todoapp,
});

export default reducer;
