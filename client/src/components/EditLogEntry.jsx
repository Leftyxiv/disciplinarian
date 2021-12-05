import React, { useEffect, useState } from 'react';
import axios from 'axios';
const { useParams, useNavigate } = require('react-router-dom');

const EditLogEntry = (props) => {
  const [description, setDescription] = useState('');
  const [unit, setUnit] = useState('');
  const [unitTwo, setUnitTwo] = useState('');

  const { logId, subtopicId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`/api/topics/anything/subtopics/${subtopicId}/logs/${logId}`).then((res) => {
      setDescription(res.data.data.log.description);
      setUnit(res.data.data.log.unitOfMeasure);
      setUnitTwo(res.data.data.log.unitOfMeasureTwo);
    });
  }, []);

  return <div>
  <form className='form-inline'>
    <input type='text' value={description} onChange={(e) => setDescription(e.target.value)} className='form-control' placeholder='Description...' />
    <input type='text' value={unit} onChange={(e) => setUnit(e.target.value)} className='form-control' placeholder={`how many?`} />
    <input type='text' value={unitTwo} onChange={(e) => setUnitTwo(e.target.value)} className='form-control' placeholder={`how many?`} />
    <button className='btn btn-dark' onClick={(e) => {
      e.preventDefault();
      axios.patch(`/api/topics/anything/subtopics/${subtopicId}/logs/${ logId }`, {
        description,
        unitOfMeasure: unit,
        unitOfMeasureTwo: unitTwo
      })
      .then(res => {
        navigate(`/${subtopicId}/logs`);
      })
      .catch(err => console.log(err));
    }}>Submit</button>
  </form>
  </div>
};


export default EditLogEntry;