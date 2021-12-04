import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {useParams } from 'react-router-dom';

const Loglist = () => {
  const [logs, setLogs] = useState([]);
  const { subtopicId } = useParams();

  useEffect(() => {
    axios.get(`/api/topics/anything/subtopics/${subtopicId}/logs`)
    .then(res => setLogs(res.data.data.logs))
    // .then(res => console.log(res.data.data.logs))
    .catch(err => console.log(err));
  }, [subtopicId]);

  return <div>Loglist</div>;
};

export default Loglist;