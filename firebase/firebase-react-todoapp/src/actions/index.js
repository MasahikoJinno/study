import * as actionType from '../utils/actionTypes';
import {
  getTodos,
  createTodo,
  updateTodo,
  deleteTodo
} from '../utils/TodoApiUtils';

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
 * loadData
 * - ToDoApp APIからデータを取得するAction Creator
 */
export function loadData() {
  /**
   * 通常はココでActionを返すが、
   * 関数を返すとredux-thunkが処理してくれる
   */
  return (dispatch) => {
    getTodos()
      .then(data => {
        dispatch({ type: actionType.GET_TODOS, todos: data });
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
  // preventDefaultしないとリロードしてしまう
  e.preventDefault();

  return (dispatch) => {
    createTodo(e, input)
      .then(text => {
        if (text === 'success') {
          dispatch({ type: actionType.CREATE_TODO, input: input });
        }
      })
      .catch(err => {
        dispatch({ type: actionType.ERROR, err: err });
      });
  };
}

/**
 * onToggleDone
 * - タスクの更新用Action Creator
 */
export function onToggleDone(index, done) {
  return (dispatch, getState) => {
    const todoapp = getState().todoapp;
    updateTodo(todoapp.todos, index, done)
      .then(data => {
        dispatch({ type: actionType.UPDATE_TODO, todos: data });
      })
      .catch(err => {
        dispatch({ type: actionType.ERROR, err: err });
      });
  }
}

/**
 * onDelete
 * - タスクの削除用Action Creator
 * - タスクの削除用Action Creator
 */
export function onDelete(index) {
  return (dispatch, getState) => {
    const todoapp = getState().todoapp;
    deleteTodo(todoapp.todo, index)
      .then(data => {
        dispatch({ type: actionType.DELETE_TODO, todos: data });
      })
      .catch(err => {
        dispatch({ type: actionType.ERROR, err: err });
      });
  }
}