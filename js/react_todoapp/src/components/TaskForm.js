import React from 'react';

const TaskForm = ({ input, onChangeText, onSubmit }) => {
  return (
    <form onSubmit={e => { onSubmit(e, input) }}>
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
