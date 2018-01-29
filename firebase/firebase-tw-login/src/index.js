import React from 'react';
import ReactDOM from 'react-dom';
import * as firebase from 'firebase';
import config from './firebase-config';
import './index.css';
import App from './App';
// import registerServiceWorker from './registerServiceWorker';

// firebaseを初期化
// firebaseのコンソールに表示されるJSONをコピーしてくる
firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();
