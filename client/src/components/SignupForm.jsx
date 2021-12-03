import React, { useState } from 'react';
import axios from 'axios';

const SignupForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/api/users/signup', { username, password }).then((res) => {
      console.log(res);
    });
  };

  return <form>
  <div class="form-group">
    <label for="exampleInputEmail1">Username</label>
    <input onChange={(e) => setUsername(e.target.value)} type="text" class="form-control" placeholder="Enter Username" />
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input onChange={(e) => setPassword(e.target.value)} type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
  </div>
  <button onClick={handleSubmit} type="button" class="btn btn-dark">Submit</button>
</form>
};

export default SignupForm;