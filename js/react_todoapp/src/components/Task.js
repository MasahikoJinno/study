import React from 'react';
import TaskDeleteButton from './TaskDeleteButton';

const Task = ({ index, task, onToggleDone, onDelete }) => {
  const text = task.done ? <s>{task.content}</s> : task.content;

  return <div>
    <input
      type="checkbox"
      checked={task.done}
      onChange={ (e) => {
        onToggleDone({
          index: index,
          done: e.target.checked,
        });
      }}
    />
    {text}
    <TaskDeleteButton index={index} onDelete={onDelete} />
  </div>;
};

export default Task;