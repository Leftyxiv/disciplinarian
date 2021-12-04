import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {useParams } from 'react-router-dom';

import LogEntry from './LogEntry.jsx';

const Loglist = () => {
  const [logs, setLogs] = useState([]);
  const { subtopicId } = useParams();
  const [subtopic, setSubtopic] = useState({});

  useEffect(() => {
    axios.get(`/api/topics/anything/subtopics/${subtopicId}/logs`)
    .then(res => setLogs(res.data.data.logs))
    // .then(res => console.log(res.data.data.logs))
    .catch(err => console.log(err));
    axios.get(`/api/topics/anything/subtopics/${subtopicId}`)
    .then(res => setSubtopic(res.data.data.subTopic))
    .catch(err => console.log(err));
  }, [subtopicId]);

  return <div>
    { logs.map(log => <LogEntry key={log._id} subtopic={subtopic} entry={log} />) }
  </div>;
};

export default Loglist;