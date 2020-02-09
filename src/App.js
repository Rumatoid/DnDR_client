import React from 'react'

import { BrowserRouter as Router, Route } from 'react-router-dom'

import Start_wtihoutcookies from './components/Start_wtihoutcookies/Start_wtihoutcookies';
import Chat from './components/Chat/Chat';


const App = () => (
    <Router>
        <Route path="/" exact component={Start_wtihoutcookies} />
        <Route path="/Chat" exact component={Chat} />
    </Router>
);

export default App;