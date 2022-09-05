import { Provider } from 'mobx-react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import finStore from './stores/FinStore';
import trackStore from './stores/TrackStore';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider finStore={finStore} trackStore={trackStore}>
    <App />
  </Provider>
);
