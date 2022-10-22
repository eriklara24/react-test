import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import {Provider} from 'react-redux';
import { createStore} from 'redux'
import rootReducer from './reducers'
import App from './App';
import { composeWithDevTools } from '@redux-devtools/extension';

const store = createStore(
  rootReducer,
  composeWithDevTools()
);

const root = ReactDOM.createRoot((document.getElementById('root') as HTMLElement ));
root.render(
  <React.StrictMode>
    <HashRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </HashRouter>
  </React.StrictMode>
);
