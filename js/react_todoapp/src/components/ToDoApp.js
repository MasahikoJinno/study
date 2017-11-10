import React, { Component } from 'react';
import TaskList from './TaskList';
import TaskForm from './TaskForm';

class ToDoApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: []
    };

    fetch('/tasks').then((res) => {
      return res.json();
    }).then((json) => {
      this.setState({
        tasks: json
      });
    });

    this.handleAdd = this.handleAdd.bind(this);
    this.handleToggleDone = this.handleToggleDone.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleAdd(content) {
    this.setState({
      tasks: this.state.tasks.concat({ id:0, content: content, done: false })
    });
  }

  handleToggleDone(e) {
    const newTasks = this.state.tasks.map((task, index) => {
      if (e.index === index) {
        task.done = e.done;
      }
      return task;
    });

    const updateTask = newTasks[e.index];

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
        this.setState({
          tasks: newTasks
        });
      }
    }).catch((err) => {
      console.log(err);
    });
  }

  handleDelete(e) {
    const method = "DELETE";

    fetch(`/task/${this.state.tasks[e.index].id}`, { method }).then((res) => {
      return res.text();
    }).then((text) => {
      if (text === 'success') {
        const newTasks = this.state.tasks.filter((task, index) => {
          return e.index !== index;
        });
        console.log(newTasks);
        this.setState({
          tasks: newTasks
        });
      }
    }).catch((err) => {
      console.log(err);
    });
  }

  render() {
    return (
      <div>
        <h1>ToDo App</h1>
        <TaskForm onAdd={this.handleAdd} />
        <TaskList tasks={this.state.tasks} onToggleDone={this.handleToggleDone} onDelete={this.handleDelete}/>
      </div>
    );
  }
}

export default ToDoApp;
