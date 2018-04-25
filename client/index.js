import React from 'react';
import { render } from  'react-dom';
import { BrowserRouter as Router, Route, Switch, browserHistory } from 'react-router-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';


import App from './components/App';
import Greeting from './components/Greeting';
import SignupPage from './components/signup/SignupPage';

const store = createStore(
  (state = {}) => state,
  applyMiddleware(thunk)
);

render(
  <Provider store={store}>
    <Router history={browserHistory}> 
      <App>
        <Switch>
          <Route exact path='/' component={Greeting}/>
          <Route path='/signup' component={SignupPage}/>
        </Switch>
      </App>
    </Router>
  </Provider>
  , 
  document.getElementById('app'));