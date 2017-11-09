import React, { Component } from 'react';

export default class TaskForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ input: e.target.value });
  }

  handleSubmit(e) {
    // preventDefaultしないとリロードしてしまう
    e.preventDefault();

    if (this.state.input) {
      /**
       * onAddでタスクの追加を通知後、フォームをリセット
       */
      this.props.onAdd(this.state.input);
      this.setState({ input: '' });
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <span>new task:</span>
        <input
          type="text"
          value={this.state.input}
          onChange={this.handleChange}
        />
      </form>
    );
  }
}