import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <p>App Component</p>
        {this.props.children}
      </div>
    );
  }
}

export default App;
