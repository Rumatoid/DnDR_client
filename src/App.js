import React from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import LogIn_SignUp from './components/LogIn_SignUp/LogIn_SignUp';
import Characters from './components/Characters/Characters';
import Name from './components/Characters/Creating/Name/Name';

const App = () => (
  <Router>
    <Route path='/' exact component={LogIn_SignUp} />
    <Route path='/:Username' exact component={Characters} />
    <Route path='/:Username/:CharacterName' exact component={Name} />
  </Router>
);

export default App;
