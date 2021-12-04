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
        <div class="card">
        <div class="card-header">
          You are worth it!
        </div>
        <div class="card-body">
          <h5 class="card-title">Create a new entry</h5>
          <p class="card-text">Create a new entry into this topic</p>
          <Link to={`/subtopic/${ topicId }/create`}><button class="btn btn-dark">Create a new entry</button></Link>
        </div>
      </div>
      { subtopics.map(subtopic => (
        <Subtopic key={subtopic._id} subtopic={subtopic} />
      ))}
    </div>
  );
}

export default SubtopicDashboard;