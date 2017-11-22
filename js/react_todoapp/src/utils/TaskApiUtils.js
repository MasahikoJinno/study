export function getTasks(callback) {
  fetch('/tasks').then((res) => {
    return res.json();
  }).then((json) => {
    callback(null, json);
  }).catch((err) => {
    callback(err);
  });
}

export function createTask(callback, e, input) {
  // preventDefaultしないとリロードしてしまう
  e.preventDefault();

  if (input) {
    const method = "POST";
    const body = JSON.stringify({ id: 0, content: input, done: false });
    const headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    };

    fetch('/task/create', {method, headers, body}).then((res) => {
      return res.text();
    }).then((text) => {
      if (text === 'success') {
        callback(null);
      }
    }).catch((err) => {
      callback(err);
    });
  }
}

export function updateTask(callback, task) {

}

export function deleteTask(callback, taskId) {

}