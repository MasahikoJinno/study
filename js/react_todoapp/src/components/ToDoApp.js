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
  }

  handleAdd(content) {
    this.setState({
      tasks: this.state.tasks.concat({ id:0, content: content, done: false })
    });
  }

  render() {
    return (
      <div>
        <h1>ToDo App</h1>
        <TaskForm onAdd={this.handleAdd} />
        <TaskList tasks={this.state.tasks} />
      </div>
    );
  }
}

export default ToDoApp;
