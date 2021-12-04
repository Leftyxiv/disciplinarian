import React from 'react';
import { Link } from 'react-router-dom';

const Topic = ({ topic, userId }) => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <div className="card-body">
        <h5 className="card-title">{ topic.title }</h5>
        <h6 className="card-subtitle mb-2 text-muted">YOU CAN DO THIS!!!</h6>
        { topic.description ? <p className="card-text">{ topic.description }</p> : '' }
        <Link to={`/topic/${ topic._id }/subtopics`}><button className="btn btn-dark">Go to this topic!</button></Link>
      </div>
    </div>
  );
}

export default Topic;