import React from 'react';
import { ListItemSecondaryAction } from 'material-ui/List';
import IconButton from 'material-ui/IconButton';
import DeleteIcon from 'material-ui-icons/Delete';

const TodoDeleteButton = props => {
  const {
    index,
    onDelete
  } = props;

  return (
    <ListItemSecondaryAction>
      <IconButton aria-label="Delete" onClick={() => { onDelete(index) }}>
        <DeleteIcon />
      </IconButton>
    </ListItemSecondaryAction>
  );
};

export default TodoDeleteButton;
