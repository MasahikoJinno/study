import React from 'react';
import Task from './Task';

const TaskList = ({ tasks, onToggleDone, onDelete}) => {
  const taskList = tasks.map((task, index) => {
    return <li key={ 'task-' + index }>
      <Task index={index} task={task} onToggleDone={onToggleDone} onDelete={onDelete} />
    </li>;
  });
  return <ul>{taskList}</ul>;
};

export default TaskList;