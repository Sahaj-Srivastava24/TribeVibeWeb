import React from 'react';
import Societies from './pages/Societies.js';
import TribeVibe from './TribeVibe/HomePage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'


function App() {

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <TribeVibe/>
        </Route>
        <Route path="/societies">
          <Societies />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;




