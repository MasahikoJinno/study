import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Children from './Children';
import Children2 from './Children2';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <App>
    <Children />
    <Children2 />
  </App>,
  document.getElementById('root')
);

registerServiceWorker();
