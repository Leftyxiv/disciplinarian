import React from 'react';
import axios from 'axios';

import Subtopic from './Subtopic.jsx';

const SubtopicDashboard = () => {
  const [subtopics, setSubtopics] = useState([]);
  return (
    <div>
      <h1>Subtopic Dashboard</h1>
      { subtopics.map(subtopic => (
        <Subtopic key={subtopic.id} subtopic={subtopic} />
      ))}
    </div>
  );
}

export default SubtopicDashboard;