import React from 'react';

const TaskDeleteButton = ({ index, onDelete }) => {
  return (
    <button onClick={() => { onDelete(index) }}>
      Delete
    </button>
  );
};

export default TaskDeleteButton;
