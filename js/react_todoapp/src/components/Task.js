import React from 'react';
import TaskDeleteButton from './TaskDeleteButton';
import { ListItem, ListItemText } from 'material-ui/List';

import Switch from 'material-ui/Switch';

const Task = ({ classes, index, task, onToggleDone, onDelete }) => {
  const text = task.done ? <s>{task.content}</s> : task.content;

  return <ListItem button>
    <Switch
      checked={task.done}
      onChange={e => { onToggleDone(index, e.target.checked) }}
    />
    <ListItemText
      primary={text}
    />
    <TaskDeleteButton
      index={index}
      onDelete={onDelete}
    />
  </ListItem>;
};

export default Task;