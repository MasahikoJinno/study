import React, { Component } from 'react';
import * as firebase from 'firebase';
import logo from './logo.svg';
import './App.css';
import config from './api-config';

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
      //if (user) {
        this.getFriends(user.providerData[0].uid);
      //}
    });
  }

  componentWillUnmount() {
    if (this.unsubscribe) {
      this.unsubscribe();
    }
  }

  getFriends = (user_id) => {
    fetch(config.getTwitterFriendsUri + user_id)
      .then(res => res.json())
      .then(data => {
        this.setState({
          friends: data
        });
      });
  };

  handleClick = () => {
    const provider = new firebase.auth.TwitterAuthProvider();
    firebase.auth().signInWithPopup(provider).then((result) => {
      console.log(result);
      this.setState({
        login: true
      });
    }).catch(err => {
      console.log('failed to log in', err);
    });
  };

  handleLogout = () => {
    firebase.auth().signOut().then(() => {
      console.log('Sign-out successful.');
    }).catch(error => {
      console.log('An error happened.');
      console.log(error)
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
    const logout = user ? <p><button onClick={this.handleLogout}>ログアウト</button></p> : null;

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
        <p className="App-intro">{logout}</p>
        <ul>{friends}</ul>
      </div>
    );
  }
}

export default App;
