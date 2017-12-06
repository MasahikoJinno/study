import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import * as actions from '../actions';
import AppBar from '../components/SimpleAppBar';
import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';

class ToDoAppContainer extends Component {
  componentDidMount() {
    this.props.actions.loadData();
  }

  render() {
    const {
      todoapp,
      actions
    } = this.props;

    return (
      <MuiThemeProvider>
        <AppBar />
        <TaskForm
          input={todoapp.input}
          onChangeText={actions.onChangeText}
          onSubmit={actions.onSubmit}
        />
        {(() => {
          if (todoapp.status === 'LOADED') {
            return (
              <TaskList
                tasks={todoapp.tasks}
                onToggleDone={actions.onToggleDone}
                onDelete={actions.onDelete}
              />
            );
          }
        })()}
      </MuiThemeProvider>
    );
  }
}

const mapState = (state, ownProps) => ({
  todoapp: state.todoapp,
});

function mapDispatch(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(
  mapState,
  mapDispatch
)(ToDoAppContainer);
