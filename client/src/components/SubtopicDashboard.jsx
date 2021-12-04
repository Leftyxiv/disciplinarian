import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';

import Subtopic from './Subtopic.jsx';

const SubtopicDashboard = () => {
  const [subtopics, setSubtopics] = useState([]);
  const { topicId } = useParams();
  useEffect(() => {
    if (topicId) {
      axios.get(`/api/topics/${topicId}/subtopics`).then((res) => {
        setSubtopics(res.data.data.subTopics);
      });
    }
   }, [])
  return (
    <div>
      <h1>Subtopic Dashboard</h1>
        <div className="card">
        <div className="card-header">
          You are worth it!
        </div>
        <div className="card-body">
          <h5 className="card-title">Create a new entry</h5>
          <p className="card-text">Create a new entry into this topic</p>
          <Link to={`/subtopic/${ topicId }/create`}><button className="btn btn-dark">Create a new entry</button></Link>
        </div>
      </div>
      { subtopics.map(subtopic => (
        <Subtopic key={subtopic._id} subtopic={subtopic} />
      ))}
    </div>
  );
}

export default SubtopicDashboard;