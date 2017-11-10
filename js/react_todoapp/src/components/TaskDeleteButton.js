import React from 'react';

const TaskDeleteButton = ({ index, onDelete }) => {
  return (
    <button
      onClick={
        (e) => {
          onDelete({ index: index })
        }
      }>
      Delete
    </button>
  );
};

export default TaskDeleteButton;
