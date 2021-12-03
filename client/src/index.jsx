import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Navbar from './components/Navbar.jsx';
import SignupForm from './components/SignupForm.jsx';
import LoginForm from './components/LoginForm.jsx';


const App = () => {
  return <div className='container'>
    <Navbar />
    <Routes>
      <Route exact path='/signup' element={<SignupForm />} />
      <Route exact path='/login' element={<LoginForm />} />
    </Routes>
    <h1>Hello World</h1>
  </div>;
};

ReactDOM.render(
  <Router>
      <App />
  </Router>, document.getElementById('app'));
