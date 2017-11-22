import * as actionType from '../utils/actionTypes';
import {
  getTasks,
  createTask,
  updateTask,
  deleteTask
} from '../utils/TaskApiUtils';

/**
 * loadData
 * - APIからデータを取得するAction Creator
 */
export function loadData() {
  /**
   * 通常はココでActionを返すが、
   * 関数を返すとredux-thunkが処理してくれる
   */
  return (dispatch) => {
    getTasks((err, data) => {
      if (err) {
        dispatch({ type: actionType.ERROR, err: err });
      } else {
        console.log(data);
        dispatch({ type: actionType.GET_TASKS, tasks: data });
      }
    });
  };
}

/**
 * onSubmit
 * - APIからデータを取得するAction Creator
 */
export function onSubmit(e, input) {
  return (dispatch) => {
    createTask(e, input, (err) => {
      if (err) {
        dispatch({ type: actionType.ERROR, err: err });
      } else {
        dispatch({ type: actionType.CREATE_TASK, input: input });
      }
    });
  };
}

/**
 * addTask
 * - APIからデータを取得するAction Creator
 */
export function onChangeText(e) {
  return {
    type: actionType.CHANGE_INPUT_TEXT,
    e: e
  }
}


export function onToggleDone(index, done) {
  return (dispatch, getState) => {
    const todoapp = getState().todoapp;
    updateTask(todoapp.tasks, index, done, (err, newTasks) => {
      if (err) {
        dispatch({ type: actionType.ERROR, err: err });
      } else {
        dispatch({ type: actionType.UPDATE_TASK, tasks: newTasks });
      }
    });
  }
}

export function onDelete(index) {
  return (dispatch, getState) => {
    const todoapp = getState().todoapp;
    deleteTask(todoapp.tasks, index, (err, newTasks) => {
      if (err) {
        dispatch({ type: actionType.ERROR, err: err });
      } else {
        dispatch({ type: actionType.DELETE_TASK, tasks: newTasks });
      }
    });
  }
}