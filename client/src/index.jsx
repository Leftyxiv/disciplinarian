import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Navbar from './components/Navbar.jsx';
import SignupForm from './components/SignupForm.jsx';
import LoginForm from './components/LoginForm.jsx';


const App = () => {
  return <div className='container'>
    <Navbar />
    <SignupForm />
    <LoginForm />
    <h1>Hello World</h1>
  </div>;
};

ReactDOM.render(
  <Router>
    <App />
  </Router>, document.getElementById('app'));
