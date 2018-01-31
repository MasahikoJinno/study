import React from 'react';
import List from 'material-ui/List';
import { withStyles } from 'material-ui/styles';

import Task from './Todo';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    background: theme.palette.background.paper,
  },
});

const TodoList = props => {
  const {
    classes,
    todos,
    onToggleDone,
    onDelete
  } = props;

  const todoList = todos.map((todo, index) => {
    return <List className={classes.root} key={'todo-' + index}>
      <Task
        index={index}
        todo={todo}
        onToggleDone={onToggleDone}
        onDelete={onDelete}
      />
    </List>;
  });
  return <ul>{todoList}</ul>;
};

export default withStyles(styles)(TodoList);
