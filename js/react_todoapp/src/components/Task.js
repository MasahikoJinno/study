import React from 'react';
import TaskDeleteButton from './TaskDeleteButton';

import Switch from 'material-ui/Switch';

const Task = ({ classes, index, task, onToggleDone, onDelete }) => {
  const text = task.done ? <s>{task.content}</s> : task.content;

  return <div>
    <Switch
      checked={task.done}
      onChange={e => { onToggleDone(index, e.target.checked) }}
    />
    {text}
    <TaskDeleteButton index={index} onDelete={onDelete} />
  </div>;
};

export default Task;