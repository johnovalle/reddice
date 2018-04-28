import React from 'react';
import { render } from  'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';
import jwt from 'jsonwebtoken';

import setAuthorizationToken from './utils/setAuthorizationToken';
import { setCurrentUser } from './actions/authActions';

import App from './components/App';
import Greeting from './components/Greeting';
import SignupPage from './components/signup/SignupPage';
import LoginPage from './components/login/LoginPage';


const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

if(localStorage.jwtToken) {
  setAuthorizationToken(localStorage.jwtToken);
  store.dispatch(setCurrentUser(jwt.decode(localStorage.jwtToken)));
}


render(
  <Provider store={store}>
    <Router> 
      <App>
        <Switch>
          <Route exact path='/' component={Greeting} />
          <Route path='/signup' component={SignupPage} />
          <Route path='/login' component={LoginPage} />
        </Switch>
      </App>
    </Router>
  </Provider>
  , 
  document.getElementById('app'));