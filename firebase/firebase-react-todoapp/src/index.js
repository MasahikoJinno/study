import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import './index.css';
import TodoAooContainer from './containers/ToDoAppContainer';
import reducer from './reducers';
import thunkMiddleware from 'redux-thunk';
// import registerServiceWorker from './registerServiceWorker';

const enhancer = applyMiddleware(thunkMiddleware);
const store = createStore(reducer, enhancer);

ReactDOM.render(
  <Provider store={store}>
    <TodoAooContainer />
  </Provider>,
  document.getElementById('root')
);

// registerServiceWorker();
