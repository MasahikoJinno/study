import * as actionTypes from '../utils/actionTypes';

const initialAppState = {
  status: 'LOADING',
  tasks: [],
  input: '',
};

export default function todoapp(state = initialAppState, action) {
  switch (action.type) {
    case actionTypes.GET_TASKS:
      return Object.assign({}, state, {
        status: 'LOADED',
        tasks: action.tasks
      });

    case actionTypes.CHANGE_INPUT_TEXT:
      return Object.assign({}, state, {
        input: action.e.target.value
      });

    case actionTypes.CREATE_TASK:
      return Object.assign({}, state, {
        tasks: state.tasks.concat({ id:0, content: action.input, done: false }),
        input: ''
      });

    case actionTypes.UPDATE_TASK:
      return Object.assign({}, state, {
        tasks: action.tasks
      });

    case actionTypes.DELETE_TASK:
      return Object.assign({}, state, {
        tasks: action.tasks
      });

    default:
      return state;
  }
}
