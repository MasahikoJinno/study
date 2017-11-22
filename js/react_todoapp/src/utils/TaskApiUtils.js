export function getTasks(callback) {
  fetch('/tasks').then((res) => {
    return res.json();
  }).then((json) => {
    callback(null, json);
  }).catch((err) => {
    callback(err);
  });
}

export function createTask(e, input, callback) {
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

export function updateTask(oldTasks, checkTaskIndex, checkTaskDone, callback) {
  const newTasks = oldTasks.map((task, index) => {
    if (checkTaskIndex === index) {
      task.done = checkTaskDone;
    }
    return task;
  });

  const updateTask = newTasks[checkTaskIndex];

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
      callback(null, newTasks);
    }
  }).catch((err) => {
    callback(err);
  });
}

export function deleteTask(oldTasks, deleteIndex, callback) {
  const method = "DELETE";

  fetch(`/task/${oldTasks[deleteIndex].id}`, { method }).then((res) => {
    return res.text();
  }).then((text) => {
    if (text === 'success') {
      const newTasks = oldTasks.filter((task, index) => {
        return deleteIndex !== index;
      });
      callback(null, newTasks);
    }
  }).catch((err) => {
    callback(err);
  });
}