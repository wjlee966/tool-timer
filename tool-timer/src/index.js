import { Provider } from 'mobx-react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import finStore from './stores/FinStore';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider finStore={finStore}>
    <App />
  </Provider>
);
