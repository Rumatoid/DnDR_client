import React from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import LogIn_SignUp from './components/LogIn_SignUp/LogIn_SignUp';
import Characters from './components/Characters/Characters';
import Creating from './components/Characters/Character/Creating/Creating';

const App = () => (
  <Router>
    <Route path='/' exact component={LogIn_SignUp} />
    <Route path='/:Username' exact component={Characters} />
    <Route path='/:Username/:id/' component={Creating} />
  </Router>
);

export default App;
