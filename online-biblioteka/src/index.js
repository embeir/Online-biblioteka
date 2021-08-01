import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';



ReactDOM.render(
  <Auth0Provider
    domain="dev-f9bx-5lx.eu.auth0.com"
    clientId="qf9b2UOKkUL2WskAsfRB4owvnYCNItRs"
    redirectUri={window.location.origin}>
    <App />
  </Auth0Provider>,
  document.getElementById('root')
);


