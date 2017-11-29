export function getTasks() {
  return fetch('/tasks').then((res) => {
    return res.json();
  });
}

export function createTask(e, input) {
  // preventDefaultしないとリロードしてしまう
  e.preventDefault();

  if (input) {
    const method = "POST";
    const body = JSON.stringify({ id: 0, content: input, done: false });
    const headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    };

    return fetch('/task/create', { method, headers, body }).then((res) => {
      return res.text();
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

  return fetch('/task/update', { method, headers, body }).then((res) => {
    if (res.status !== 200) {
      return new Error(res.statusText);
    }
    return res.text();
  }).then((text) => {
    if (text !== 'success') {
      return new Error(text);
    }
    return newTasks;
  });
}

export function deleteTask(oldTasks, deleteIndex) {
  const method = "DELETE";

  return fetch(`/task/${oldTasks[deleteIndex].id}`, { method }).then((res) => {
    return res.text();
  }).then((text) => {
    if (text === 'success') {
      const newTasks = oldTasks.filter((task, index) => {
        return deleteIndex !== index;
      });
      return newTasks;
    }
  });
}