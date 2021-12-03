import React, { useState } from 'react';
import axios from 'axios';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/api/users/login', { username, password }).then((res) => {
      console.log(res);
    });
  };

  return <form>
  <div className="form-group">
    <label>Username</label>
    <input onChange={(e) => setUsername(e.target.value)} type="text" className="form-control" placeholder="Enter Username" />
  </div>
  <div className="form-group">
    <label>Password</label>
    <input onChange={(e) => setPassword(e.target.value)} type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
  </div>
  <button onClick={handleSubmit} type="button" className="btn btn-dark">Submit</button>
</form>
};

export default LoginForm;