import * as actionType from '../utils/actionTypes';
import { getTasks } from '../utils/TaskApiUtils';

/**
 * loadData
 * - APIからデータを取得するAction Creator
 */
export function loadData() {
  /**
   * 通常はココでActionを返すが、
   * 関数を返すとredux-thunkが処理してくれる
   */
  return (dispatch/*, getState */) => {
    dispatch({ type: actionType.GET_TASKS });

    getTasks((err, data) => {
      if (err) {
        dispatch({ type: actionType.ERROR, err: err });
      } else {
        dispatch({ type: actionType.GET_TASKS, data: data });
      }
    });
  };
}