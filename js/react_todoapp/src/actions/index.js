import * as actionType from '../utils/actionTypes';

export const onSubmit = (e, input) => ({
  type: actionType.CREATE_TASK,
  e,
  input,
});

export const onLoad = () => ({
  type: actionType.GET_TASKS,
});

export const onToggleDone = (e) => ({
  type: actionType.UPDATE_TASK,
  e,
});

export const onDeleteClick = (e) => ({
  type: actionType.DELETE_TASK,
  e,
});

export const onChangeText = (e) => ({
  type: actionType.CHANGE_INPUT_TEXT,
  e,
});
