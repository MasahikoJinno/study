import * as actionTypes from '../utils/actionTypes';

const initialAppState = {
  status: 'LOADING',
  todos: [],
  input: '',
};

export default function todoapp(state = initialAppState, action) {
  switch (action.type) {
    case actionTypes.GET_TODOS:
      return Object.assign({}, state, {
        status: 'LOADED',
        todos: action.todos
      });

    case actionTypes.CHANGE_INPUT_TEXT:
      return Object.assign({}, state, {
        input: action.e.target.value
      });

    case actionTypes.CREATE_TODO:
      return Object.assign({}, state, {
        todos: state.todos.concat({ id:0, content: action.input, done: false }),
        input: ''
      });

    case actionTypes.UPDATE_TODO:
      return Object.assign({}, state, {
        todos: action.todos
      });

    case actionTypes.DELETE_TODO:
      return Object.assign({}, state, {
        todos: action.todos
      });

    default:
      return state;
  }
}
