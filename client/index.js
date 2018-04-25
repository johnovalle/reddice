import React from 'react';
import { render } from  'react-dom';
import { BrowserRouter as Router, Route, Switch, browserHistory } from 'react-router-dom';

import App from './components/App';
import Greeting from './components/Greeting';
import SignupPage from './components/signup/SingupPage';

render(
  <Router history={browserHistory}> 
    <App>
      <Switch>
        <Route exact path='/' component={Greeting}/>
        <Route path='/signup' component={SignupPage}/>
      </Switch>
    </App>
  </Router>, 
  document.getElementById('app'));