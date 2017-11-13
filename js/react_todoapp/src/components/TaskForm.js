import React, { Component } from 'react';

const TaskForm = ({ input, onChangeText, onSubmit }) => {
  return (
    <form onSubmit={(e) => { onSubmit(e, this.state.input) }}>
      <span>new task:</span>
      <input
        type="text"
        value={input}
        onChange={onChangeText}
      />
    </form>
  );
};

export default TaskForm;
