import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';

const styles = () => ({
  root: {
    width: '100%',
  },
});

const TodoAppBar = props =>  {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          <Typography type="title" color="inherit">
            Firebase x React Todo App
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

TodoAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TodoAppBar);
