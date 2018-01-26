import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import Navbar from './components/Navbar/navbar';
import Register from './components/login/register';

export default class App extends Component {
  render() {
    return (
    <div>
      <Router>
        <div>
        <Navbar />
        <Route exact path='/register' component= {Register} />
        </div>
      </Router>
    </div>
    )
  }
}

