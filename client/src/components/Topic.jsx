import React from 'react';
import { Link } from 'react-router-dom';

const Topic = ({ topic, userId }) => {
  return (
    <div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">{ topic.title }</h5>
        <h6 class="card-subtitle mb-2 text-muted">YOU CAN DO THIS!!!</h6>
        { topic.description ? <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> : '' }
        <Link to={`/dashboard/${userId}/topic/${ topic.id }`}><button class="btn btn-dark">Go to this topic!</button></Link>
      </div>
    </div>
  );
}