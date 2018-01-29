import React, { Component } from 'react';
import * as firebase from 'firebase';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: false,
      authStateChecked: false,
      friends: []
    };
  }

  componentDidMount() {
    this.unsubscribe = firebase.auth().onAuthStateChanged(() => {
      this.setState({
        authStateChecked: true
      });
      const user = firebase.auth().currentUser;
      this.getFriends(user.providerData[0].uid);
    });
  }

  componentWillUnmount() {
    if (this.unsubscribe) {
      this.unsubscribe();
    }
  }

  getFriends = (user_id) => {
    fetch(`https://xdozxabfe6.execute-api.ap-northeast-1.amazonaws.com/test/friends/${user_id}`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          friends: data
        });
      });
  };

  handleClick = () => {
    const provider = new firebase.auth.TwitterAuthProvider();
    firebase.auth().signInWithPopup(provider).then(() => {
      this.setState({
        login: true
      });
    }).catch(err => {
      console.log('failed to log in', err);
    });
  };

  render() {
    const user = firebase.auth().currentUser;
    const { authStateChecked } = this.state;

    if (!authStateChecked) {
      return (
        <div className="App">
          読み込み中。。。
        </div>
      );
    }

    const login = user ? <span>ユーザ名: {user.displayName}</span> : <p><button onClick={this.handleClick}>ログイン</button></p>;
    console.log('test');

    const friends = this.state.friends.map(friend => {
      return <li key={friend.id}>{friend.name}</li>
    });

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Firebase Twitter Login</h1>
        </header>
        <p className="App-intro">{login}</p>
        <ul>{friends}</ul>
      </div>
    );
  }
}

export default App;
