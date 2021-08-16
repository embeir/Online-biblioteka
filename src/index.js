import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './components/Store/Reducers'

const store = createStore(
  rootReducer,
 window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() 
  );


ReactDOM.render(
  <Provider store={store} >
    <Auth0Provider
      domain="dev-f9bx-5lx.eu.auth0.com"
      clientId="qf9b2UOKkUL2WskAsfRB4owvnYCNItRs"
      redirectUri={window.location.origin}>
      <App />
    </Auth0Provider>
  </Provider>,
  document.getElementById('root')
);


