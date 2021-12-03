import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const logout = () => {
    localStorage.removeItem('discAuth');
    navigate('/');
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">Disciplinarian</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <Link className="nav-item nav-link active" to='/'>Home <span className="sr-only">(current)</span></Link>
          { window.localStorage.getItem('discAuth') ? '' : <Link className="nav-item nav-link" to='/signup'>Sign Up</Link> }
          { window.localStorage.getItem('discAuth') ? '' : <Link className="nav-item nav-link" to='/login'>Log In</Link> }
          { window.localStorage.getItem('discAuth') ? <a className="nav-item nav-link" onClick={logout}>Log Out</a> : ''}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;