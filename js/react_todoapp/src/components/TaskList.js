import React from 'react';

const TaskList = ({ tasks }) => {
  const list = tasks.map((task, index) => {
    return <li key={'task-' + index}>{task.content}</li>;
  });
  return <ul>{list}</ul>;
};

export default TaskList;