import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from '../actions';
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
      <div>
        <h1>Todo App of Redux</h1>
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
      </div>
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
