import React from 'react';
import TaskDeleteButton from './TodoDeleteButton';
import { ListItem, ListItemText } from 'material-ui/List';

import Switch from 'material-ui/Switch';

const Todo = props => {
  const {
    index,
    todo,
    onToggleDone,
    onDelete
  } = props;

  const text = todo.done ? <s>{todo.content}</s> : todo.content;

  return <ListItem button>
    <Switch checked={todo.done} onChange={e => { onToggleDone(index, e.target.checked) }}/>
    <ListItemText primary={text}/>
    <TaskDeleteButton index={index} onDelete={onDelete}/>
  </ListItem>;
};

export default Todo;
