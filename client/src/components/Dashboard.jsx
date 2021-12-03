import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';

import Topic from './Topic.jsx';

const Dashboard = (props) => {
  const [topics, setTopics] = useState([]);
  const { userId } = useParams();

  const newTopic = () => {
    <div className="card" style={{ width: "18rem" }}>
    <div className="card-body">
      <h5 className="card-title">New Topic</h5>
      <h6 className="card-subtitle mb-2 text-muted">YOU CAN DO THIS!!!</h6>
      <p className="card-text">Click here to create a new topic</p>
      <Link to={`/topic/create`}><button className="btn btn-dark">Create new topic!</button></Link>
    </div>
  </div>
  }

  useEffect(() => {
    axios.get(`/api/topics/${userId}`)
      .then(res => setTopics(res.data.topics))
      .catch(err => console.log(err));
  }, []);
  return <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
        <div className="card" style={{ width: "18rem" }}>
    <div className="card-body">
      <h5 className="card-title">New Topic</h5>
      <h6 className="card-subtitle mb-2 text-muted">YOU CAN DO THIS!!!</h6>
      <p className="card-text">Click here to create a new topic</p>
      <Link to={`/topic/create`}><button className="btn btn-dark">Create new topic!</button></Link>
    </div>
  </div>

    { topics.map(topic => <Topic key={topic._id} topic={topic} userId={userId} />) }
  </div>;
};

export default Dashboard;
