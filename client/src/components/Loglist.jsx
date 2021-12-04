import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

import LogEntry from './LogEntry.jsx';

const Loglist = () => {
  const [logs, setLogs] = useState([]);
  const [subtopic, setSubtopic] = useState({});
  const [description, setDescription] = useState('');
  const [unit, setUnit] = useState('');
  const [unitTwo, setUnitTwo] = useState('');

  const { subtopicId } = useParams();

  const navigate = useNavigate();

  const fetchNew = () => {
    axios.get(`/api/topics/anything/subtopics/${subtopicId}/logs`)
    .then(res => setLogs(res.data.data.logs.reverse()))
    // .then(res => console.log(res.data.data.logs))
    .catch(err => console.log(err));
  }

  useEffect(() => {
    fetchNew();
    axios.get(`/api/topics/anything/subtopics/${subtopicId}`)
    .then(res => setSubtopic(res.data.data.subTopic))
    .catch(err => console.log(err));
  }, [subtopicId]);

  return <div>
    <form className='form-inline'>
      <input type='text' value={description} onChange={(e) => setDescription(e.target.value)} className='form-control' placeholder='Description...' />
      <input type='text' value={unit} onChange={(e) => setUnit(e.target.value)} className='form-control' placeholder={`how many ${ subtopic.unitOfMeasure }?`} />
      <input type='text' value={unitTwo} onChange={(e) => setUnitTwo(e.target.value)} className='form-control' placeholder={`how many ${ subtopic.unitOfMeasureTwo }?`} />
      <button className='btn btn-dark' onClick={(e) => {
        e.preventDefault();
        axios.post(`/api/topics/anything/subtopics/${subtopicId}/logs`, {
          description,
          unitOfMeasure: unit,
          unitOfMeasureTwo: unitTwo
        })
        .then(res => {
          fetchNew();
          setDescription('');
          setUnit('');
          setUnitTwo('');
        })
        .catch(err => console.log(err));
      }}>Submit</button>
    </form>
    { logs.map(log => <LogEntry key={log._id} subtopic={subtopic} entry={log} />) }
    <button onClick={() => navigate(-1)} className='btn btn-dark'>Go Back</button>
  </div>;
};

export default Loglist;