export function getTasks(callback) {
  fetch('/tasks').then((res) => {
    return res.json();
  }).then((json) => {
    callback(null, json);
  }).catch((err) => {
    callback(err);
  });
}

export function createTask(callback, content) {

}

export function updateTask(callback, task) {

}

export function deleteTask(callback, taskId) {

}