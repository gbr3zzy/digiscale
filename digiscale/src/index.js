

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

//Screens
import AgeSelect from './App/Authentication/AgeSelect/AgeSelect'
import Signup from './App/Authentication/Signup/Signup'
import Dashboard from './App/Home/Dashboard/Dashboard'

function Routes() {
  return (
    <Router>
      <div>
        <div className="container">
          <Route exact path="/" component={AgeSelect} />
          <Route exact path="/Signup" component={Signup} />
          <Route exact path="/Dashboard" component={Dashboard} />


        </div>
      </div>
    </Router>
  );
}

ReactDOM.render(<Routes />, document.getElementById('root'));
