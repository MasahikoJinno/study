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
        tasks: action.data
      });

    default:
      return state;
  }
}
