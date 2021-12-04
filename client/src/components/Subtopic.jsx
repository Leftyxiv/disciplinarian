import React from 'react';
import { Link } from 'react-router-dom';

const Subtopic = ({ subtopic }) => {
  return (
    <div class="card">
      <div class="card-header">
        Stay Focused!
      </div>
      <div class="card-body">
        <h5 class="card-title">{ subtopic.title }</h5>
        <p class="card-text">The units of measurements for this log entry are { subtopic.unitOfMeasure } and { subtopic.unitOfMeasureTwo }</p>
        <Link to={`/subtopic/${ subtopic._id }`}><button class="btn btn-dark">See these logs</button></Link>
      </div>
    </div>
  );
};

export default Subtopic;