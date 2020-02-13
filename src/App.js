import React from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import Start_wtihoutcookies from './components/Start_wtihoutcookies/Start_wtihoutcookies';
import GET from './components/GET/GET';

const App = () => (
  <Router>
    <Route path='/' exact component={Start_wtihoutcookies} />
    <Route path='/GET' exact component={GET} />
  </Router>
);

export default App;
