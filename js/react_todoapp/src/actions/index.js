import * as actionType from '../utils/actionTypes';
import {
  getTasks,
  createTask,
  updateTask,
  deleteTask
} from '../utils/TaskApiUtils';

/**
 * loadData
 * - ToDoApp APIからデータを取得するAction Creator
 */
export function loadData() {
  /**
   * 通常はココでActionを返すが、
   * 関数を返すとredux-thunkが処理してくれる
   */
  return (dispatch) => {
    getTasks()
      .then(data => {
        dispatch({ type: actionType.GET_TASKS, tasks: data });
      })
      .catch(err => {
        dispatch({ type: actionType.ERROR, err: err });
      });
  };
}

/**
 * onSubmit
 * - タスクを新規作成するAction Creator
 */
export function onSubmit(e, input) {
  return (dispatch) => {
    createTask(e, input)
      .then(text => {
        if (text === 'success') {
          dispatch({ type: actionType.CREATE_TASK, input: input });
        }
      })
      .catch(err => {
        dispatch({ type: actionType.ERROR, err: err });
      });
  };
}

/**
 * onChangeText
 * - テキストボックスの2WayDataBinding用Action Creator
 */
export function onChangeText(e) {
  return {
    type: actionType.CHANGE_INPUT_TEXT,
    e: e
  }
}

/**
 * onToggleDone
 * - タスクの更新用Action Creator
 */
export function onToggleDone(index, done) {
  return (dispatch, getState) => {
    const todoapp = getState().todoapp;
    updateTask(todoapp.tasks, index, done)
      .then(data => {
        dispatch({ type: actionType.UPDATE_TASK, tasks: data });
      })
      .catch(err => {
        dispatch({ type: actionType.ERROR, err: err });
      });
  }
}

/**
 * onDelete
 * - タスクの削除用Action Creator
 */
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