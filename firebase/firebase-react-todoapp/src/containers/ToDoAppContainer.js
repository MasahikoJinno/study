import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { MuiThemeProvider, createMuiTheme} from 'material-ui/styles';
import * as actions from '../actions';
import AppBar from '../components/TodoAppBar';
import TodoForm from '../components/TodoForm';
import TodoList from '../components/TodoList';

const theme = createMuiTheme();

class ToDoAppContainer extends Component {
  componentDidMount() {
    this.props.actions.loadData();
  }

  render() {
    const {
      todoapp,
      actions
    } = this.props;

    console.log(todoapp);

    return (
      <MuiThemeProvider theme={theme}>
        <AppBar />
        <TodoForm
          input={todoapp.input}
          onChangeText={actions.onChangeText}
          onSubmit={actions.onSubmit}
        />
        {(() => {
          if (todoapp.status === 'LOADED') {
            return (
              <TodoList
                todos={todoapp.todos}
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
