import * as actionType from '../utils/actionTypes';
import { getTasks, createTask } from '../utils/TaskApiUtils';

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
        dispatch({ type: actionType.GET_TASKS, data: data });
      }
    });
  };
}

/**
 * addTask
 * - APIからデータを取得するAction Creator
 */
export function addTask(e, input) {
  /**
   * 通常はココでActionを返すが、
   * 関数を返すとredux-thunkが処理してくれる
   */
  return (dispatch) => {
    createTask((err) => {
      if (err) {
        dispatch({ type: actionType.ERROR, err: err });
      } else {
        dispatch({ type: actionType.CREATE_TASK, input: input });
      }
    });
  };
}