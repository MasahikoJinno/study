import * as actionTypes from '../utils/actionTypes';

const initialAppState = {
  status: 'LOADING',
  tasks: [],
  input: '',
};

export default function todoapp(state = initialAppState, action) {
  switch (action.type) {
    case actionTypes.LOADING:
      return initialAppState;

    case actionTypes.GET_TASKS:
      console.log(action.data);
      return {
        status: 'LOADED',
        tasks: action.data
      };

    case actionTypes.ERROR:
      return initialAppState;

    default:
      return state;
  }
}
