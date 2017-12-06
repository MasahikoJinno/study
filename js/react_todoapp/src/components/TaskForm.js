import React from 'react';
import { withStyles } from 'material-ui/styles';

import TextField from 'material-ui/TextField';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    //marginLeft: theme.spacing.unit,
    marginLeft: 40,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  menu: {
    width: 200,
  },
});

const TaskForm = ({ classes, input, onChangeText, onSubmit }) => {
  return (
    <form onSubmit={e => { onSubmit(e, input) }}>
      <TextField
        id="todo-content"
        label="Todo Content"
        className={classes.textField}
        value={input}
        onChange={onChangeText}
        margin="normal"
      />
    </form>
  );
};

export default withStyles(styles)(TaskForm);
