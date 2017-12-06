import React from 'react';
import { withStyles } from 'material-ui/styles';

import Button from 'material-ui/Button';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});

const TaskDeleteButton = ({ classes, index, onDelete }) => {
  return (
    <Button raised dense className={classes.button} onClick={() => { onDelete(index) }}>
      Delete
    </Button>
  );
};

export default withStyles(styles)(TaskDeleteButton);
