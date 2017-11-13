import * as actionTypes from '../utils/actionTypes';

const initialAppState = {
  tasks: [],
  input: '',
};

const todoapp = (state = initialAppState, action) => {
  if (action.type === actionTypes.CREATE_TASK) {
    // preventDefaultしないとリロードしてしまう
    action.e.preventDefault();

    if (action.input) {
      const method = "POST";
      const body = JSON.stringify({ id: 0, content: action.input, done: false });
      const headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      };

      fetch('/task/create', {method, headers, body}).then((res) => {
        return res.text();
      }).then((text) => {
        console.log(text);
        if (text === 'success') {
          return {
            ...state,
            tasks: todoapp.tasks.concat({ id:0, content: action.input, done: false }),
            input: '',
          }
        }
      });
    }
  } else if (action.type === actionTypes.GET_TASKS) {
    fetch('/tasks').then((res) => {
      return res.json();
    }).then((json) => {
      return {
        ...state,
        tasks: json
      }
    });
  } else if (action.type === actionTypes.UPDATE_TASK) {
    const newTasks = this.state.tasks.map((task, index) => {
      if (action.e.index === index) {
        task.done = action.e.done;
      }
      return task;
    });

    const updateTask = newTasks[action.e.index];

    const method = "PATCH";
    const body = JSON.stringify({
      id: updateTask.id,
      content: updateTask.content,
      done: updateTask.done
    });
    const headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    };

    fetch('/task/update', { method, headers, body }).then((res) => {
      return res.text();
    }).then((text) => {
      if (text === 'success') {
        return {
          ...state,
          tasks: newTasks
        }
      }
    }).catch((err) => {
      console.log(err);
    });
  } else if (action.type === actionTypes.DELETE_TASK) {
    const method = "DELETE";

    fetch(`/task/${todoapp.tasks[action.e.index].id}`, { method }).then((res) => {
      return res.text();
    }).then((text) => {
      if (text === 'success') {
        const newTasks = todoapp.tasks.filter((task, index) => {
          return action.e.index !== index;
        });
        return {
          ...state,
          tasks: newTasks
        }
      }
    }).catch((err) => {
      console.log(err);
    });
  } else if (action.type === actionTypes.CHANGE_INPUT_TEXT ) {
    return {
      ...state,
      input: action.e.target.value
    }
  } else {
    return state;
  }
};

export default todoapp;
