import React, { useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const EditSubtopicForm = () => {
  const [subtopicTitle, setSubtopicTitle] = useState('');
  const [subtopicUnit, setSubtopicUnit] = useState('');
  const [subtopicUnitTwo, setSubtopicUnitTwo] = useState('');

  const { topicId } = useParams();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .get(`/api/topics/${ topicId }/subtopics`)
      .catch((err) => console.log(err));
    };

    // .then((res) => {
    //   setSubtopicTitle('');
    //   navigate(`/topic/${ topicId }/subtopics`);
    // })
  return (
    <form>
      <div className="form-group">
        <label>Subtopic Title</label>
        <input
          type="text"
          className="form-control"
          value={subtopicTitle}
          onChange={(e) => setSubtopicTitle(e.target.value)}
          placeholder="Subtopic Title"
        />
      </div>
      <div className="form-group">
        <label>Unit of measure</label>
        <textarea
          className="form-control"
          value={subtopicUnit}
          onChange={(e) => setSubtopicUnit(e.target.value)}
          placeholder="Unit of measure: ie Pages read"
        />
      </div>
      <div className="form-group">
        <label>Unit of measure (optional)</label>
        <textarea
          className="form-control"
          value={subtopicUnitTwo}
          onChange={(e) => setSubtopicUnitTwo(e.target.value)}
          placeholder="Unit of measure: ie time spent"
        />
      </div>
      <button type="button" onClick={handleSubmit} className="btn btn-dark">
        Submit
      </button>
    </form>
  );
}

export default EditSubtopicForm;