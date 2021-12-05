import React, { usetate } from 'react';
import styled from 'styled-components';
import { Link, useParams } from 'react-router-dom';

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

const LogEntry = ({ entry, subtopic }) => {
  return (
    <div className="card">
      <Link to={`/${ subtopic._id }/${ entry._id }/editlog`}><EditButton className="btn btn-sm btn-dark" >Edit</EditButton></Link>
      <DeleteButton className="btn btn-sm btn-dark" >X</DeleteButton>
      <div className="card-header">
        { entry.date }
      </div>
      <div className="card-body">
        <blockquote className="blockquote mb-0">
          <p>{ entry.description } - { entry.unitOfMeasure } { subtopic.unitOfMeasure }'s at { entry.unitOfMeasureTwo } { subtopic.unitOfMeasureTwo }</p>
          <footer className="blockquote-footer"> { subtopic.title }<cite title="Source Title"></cite></footer>
        </blockquote>
      </div>
    </div>
  );
}

export default LogEntry;