import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

import Subtopic from './Subtopic.jsx';

const SubtopicDashboard = () => {
  const [subtopics, setSubtopics] = useState([]);
  const { topicId } = useParams();
  useEffect(() => {
    if (topicId) {
      axios.get(`/api/topics/${topicId}/subtopics`).then((res) => {
        setSubtopics(res.data.data.subTopics);
        console.log(res.data.data);
      });
    }
   }, [])
  return (
    <div>
      <h1>Subtopic Dashboard</h1>
      { subtopics.map(subtopic => (
        <Subtopic key={subtopic._id} subtopic={subtopic} />
      ))}
    </div>
  );
}

export default SubtopicDashboard;