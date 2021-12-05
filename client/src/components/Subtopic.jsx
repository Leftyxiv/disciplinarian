import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';

const EditButton = styled.button`
position: absolute;
top: 3.5rem;
right: 5rem;
`;
const DeleteButton = styled.button`
position: absolute;
top: 3.5rem;
right: 2.5rem;
`;

const Subtopic = ({ subtopic, updateSubtopics }) => {
  const handleDelete = () => {
    axios.delete(`/api/topics/null/subtopics/${subtopic._id}`).then(() => {
      updateSubtopics();
    }).catch(err => console.log(err, err.message));
  };
  return (
    <div className="card">
      <div className="card-header">
        Stay Focused!
      </div>
      <div className="card-body">
        <h5 className="card-title">{ subtopic.title }</h5>
        <p className="card-text">The units of measurements for this log entry are { subtopic.unitOfMeasure } and { subtopic.unitOfMeasureTwo }</p>
        <Link to={`/${ subtopic._id }/logs`}><button className="btn btn-dark">See these logs</button></Link>
        <Link to={`/subtopic/${ subtopic._id }/edit`}><EditButton className="btn btn-sm btn-dark">Edit</EditButton></Link>
        <DeleteButton className="btn btn-sm btn-dark" onClick={handleDelete}>X</DeleteButton>
      </div>
    </div>
  );
};

export default Subtopic;