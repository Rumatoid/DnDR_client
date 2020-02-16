import React from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import LogIn_SignUp from './components/LogIn_SignUp/LogIn_SignUp';
import Characters from './components/Characters/Characters';

const App = () => (
  <Router>
    <Route path='/' exact component={LogIn_SignUp} />
    <Route path='/:Nickname' exact component={Characters} />
  </Router>
);

export default App;
