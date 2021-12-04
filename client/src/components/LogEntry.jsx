import React, { usetate } from 'react';

const LogEntry = ({ entry, subtopic }) => {
  return (
    <div className="card">
      <div className="card-header">
        { entry.date }
      </div>
      <div className="card-body">
        <blockquote className="blockquote mb-0">
          <p>{ entry.description } - { entry.unitOfMeasure } { subtopic.unitOfMeasure }'s at { entry.unitOfMeasureTwo } { subtopic.unitOfMeasureTwo }</p>
          <footer className="blockquote-footer"> <cite title="Source Title"></cite></footer>
        </blockquote>
      </div>
    </div>
  );
}

export default LogEntry;