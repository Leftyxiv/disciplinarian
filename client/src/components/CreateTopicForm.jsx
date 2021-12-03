import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CreateTopicForm = ({ userId }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/api/topics', { title, description, parent_id: userId }).then((res) => {
      navigate(`/dashboard/${ userId }`);
    });
  };

  useEffect(() => {
    if (!localStorage.getItem('discAuth')) {
      navigate('/');
    }
  }, []);

  return <div>
    <h1>Create a new topic</h1>
    <form>
      <div className="form-group">
        <label>Title</label>
        <input onChange={(e) => setTitle(e.target.value)} type="text" className="form-control" placeholder="Enter Title" />
      </div>
      <div className="form-group">
        <label >Description</label>
        <input onChange={(e) => setDescription(e.target.value)} type="text" className="form-control" placeholder="Description" />
      </div>
      <button onClick={handleSubmit} type="button" className="btn btn-dark">Submit</button>
    </form>
  </div>
};

export default CreateTopicForm;