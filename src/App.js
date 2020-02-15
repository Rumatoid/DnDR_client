import React from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import LogIn_SignUp from './components/LogIn_SignUp/LogIn_SignUp';
import GET from './components/GET/GET';

const App = () => (
  <Router>
    <Route path='/' exact component={LogIn_SignUp} />
    <Route path='/GET' exact component={GET} />
  </Router>
);

export default App;
