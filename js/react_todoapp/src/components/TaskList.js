import React from 'react';
import List, { ListItem } from 'material-ui/List';
import { withStyles } from 'material-ui/styles';

import Task from './Task';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    background: theme.palette.background.paper,
  },
});

const TaskList = ({ classes, tasks, onToggleDone, onDelete}) => {
  const taskList = tasks.map((task, index) => {
    return <div className={classes.root}>
      <List key={'task-' + index}>
        <Task
          index={index}
          task={task}
          onToggleDone={onToggleDone}
          onDelete={onDelete}
        />
      </List>
    </div>;
  });
  return <ul>{taskList}</ul>;
};

export default withStyles(styles)(TaskList);