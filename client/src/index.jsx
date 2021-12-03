import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

import Navbar from './components/Navbar.jsx';
import SignupForm from './components/SignupForm.jsx';
import LoginForm from './components/LoginForm.jsx';
import Dashboard from './components/Dashboard.jsx';

const App = () => {
  const navigate = useNavigate();
  useEffect(() => {
    localStorage.getItem('discAuth') ? navigate(`/dashboard/${ localStorage.getItem('discAuth') }`) : null;
  }, []);

  return <div className='container'>
    <Navbar />
    <Routes>
      <Route exact path='/signup' element={<SignupForm />} />
      <Route exact path='/login' element={<LoginForm />} />
      <Route exact path='/dashboard/:userId' element={<Dashboard />} />
    </Routes>
    <h1>Hello World</h1>
  </div>;
};

ReactDOM.render(
  <Router>
      <App />
  </Router>, document.getElementById('app'));
