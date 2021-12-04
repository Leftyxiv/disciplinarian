import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const EditSubtopicForm = () => {
  const [subtopicTitle, setSubtopicTitle] = useState('');
  const [subtopicUnit, setSubtopicUnit] = useState('');
  const [subtopicUnitTwo, setSubtopicUnitTwo] = useState('');
  const [parent_id, setParentId] = useState('');

  const { subtopicId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`/api/topics/nothing/subtopics/${ subtopicId }`)
      .then((res) => {
        setSubtopicTitle(res.data.data.subTopic.title);
        setSubtopicUnit(res.data.data.subTopic.unitOfMeasure);
        setSubtopicUnitTwo(res.data.data.subTopic.unitOfMeasureTwo);
        setParentId(res.data.data.subTopic.parent_id);
      })
      .catch((err) => console.log(err));
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.patch(`/api/topics/nothing/subtopics/${ subtopicId }`, {
      title: subtopicTitle,
      unitOfMeasure: subtopicUnit,
      unitOfMeasureTwo: subtopicUnitTwo,
    }).then((res) => {
      navigate(`/topic/${ parent_id }/subtopics`);
    }).catch((err) => console.log(err));
  };
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