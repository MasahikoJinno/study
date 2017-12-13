import React from 'react';
import { withStyles } from 'material-ui/styles';

import { ListItemSecondaryAction } from 'material-ui/List';
import IconButton from 'material-ui/IconButton';
import DeleteIcon from 'material-ui-icons/Delete';

const TaskDeleteButton = ({ classes, index, onDelete }) => {
  return (
    <ListItemSecondaryAction>
      <IconButton aria-label="Delete" onClick={() => { onDelete(index) }}>
        <DeleteIcon />
      </IconButton>
    </ListItemSecondaryAction>
  );
};

export default TaskDeleteButton;
