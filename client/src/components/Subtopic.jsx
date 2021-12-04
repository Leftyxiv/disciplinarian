import React from 'react';
import { Link } from 'react-router-dom';

const Subtopic = ({ subtopic }) => {
  return (
    <div className="card">
      <div className="card-header">
        Stay Focused!
      </div>
      <div className="card-body">
        <h5 className="card-title">{ subtopic.title }</h5>
        <p className="card-text">The units of measurements for this log entry are { subtopic.unitOfMeasure } and { subtopic.unitOfMeasureTwo }</p>
        <Link to={`/${ subtopic._id }/logs`}><button className="btn btn-dark">See these logs</button></Link>
      </div>
    </div>
  );
};

export default Subtopic;