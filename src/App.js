import React from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import LogIn from './components/LogIn/LogIn';
import GET from './components/GET/GET';

const App = () => (
  <Router>
    <Route path='/' exact component={LogIn} />
    <Route path='/GET' exact component={GET} />
  </Router>
);

export default App;
