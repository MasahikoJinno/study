import apiConfig from '../config/api-config';

export function getTodos() {
  return fetch(apiConfig.endpoint + '/todos').then(res => {
    return res.json();
  });
}

export function createTodo(e, input) {
  if (input) {
    const method = "POST";
    const body = JSON.stringify({ id: 0, content: input, done: false });
    const headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    };

    return fetch(apiConfig.endpoint + '/todos/create', { method, headers, body })
      .then(res => {
        return res.text();
      });
  }
}

export function updateTodo(oldTodos, checkTodoIndex, checkTodoDone) {
  const newTodos = oldTodos.map((Todo, index) => {
    if (checkTodoIndex === index) {
      Todo.done = checkTodoDone;
    }
    return Todo;
  });

  const updateTodo = newTodos[checkTodoIndex];

  const method = "PATCH";
  const body = JSON.stringify({
    id: updateTodo.id,
    content: updateTodo.content,
    done: updateTodo.done
  });
  const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  };

  return fetch('/todo/update', { method, headers, body }).then((res) => {
    if (res.status !== 200) {
      return new Error(res.statusText);
    }
    return res.text();
  }).then((text) => {
    if (text !== 'success') {
      return new Error(text);
    }
    return newTodos;
  });
}

export function deleteTodo(oldTodos, deleteIndex) {
  const method = "DELETE";

  return fetch(`/todo/${oldTodos[deleteIndex].id}`, { method }).then((res) => {
    return res.text();
  }).then((text) => {
    if (text === 'success') {
      const newTodos = oldTodos.filter((Todo, index) => {
        return deleteIndex !== index;
      });
      return newTodos;
    }
  });
}