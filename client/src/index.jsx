import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

import Navbar from './components/Navbar.jsx';
import SignupForm from './components/SignupForm.jsx';
import LoginForm from './components/LoginForm.jsx';
import Dashboard from './components/Dashboard.jsx';
import CreateTopicForm from './components/CreateTopicForm.jsx';
import SubtopicDashboard from './components/SubtopicDashboard.jsx';
import CreateSubtopicForm from './components/CreateSubtopicForm.jsx';
import Loglist from './components/Loglist.jsx';
import EditSubtopicForm from './components/EditSubtopic.jsx';
import EditLogEntry from './components/EditLogEntry.jsx';

const App = () => {
  const [userId, setUserId] = useState('');
  const navigate = useNavigate();
  useEffect(() => {
    localStorage.getItem('discAuth') ? navigate(`/dashboard/${ localStorage.getItem('discAuth') }`) : null;
    if (localStorage.getItem('discAuth')) {
      setUserId(localStorage.getItem('discAuth'));
    }
  }, []);

  return <div className='container'>
    <Navbar />
    <Routes>
      <Route exact path='/signup' element={<SignupForm />} />
      <Route exact path='/login' element={<LoginForm />} />
      <Route exact path='/' element={<div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}><LoginForm /><img src={'https://www.stufflovely.com/wp-content/uploads/2021/07/cover_discipline_canva-600x300.jpg'} /></div>} />
      <Route exact path='/dashboard/:userId' element={<Dashboard />} />
      <Route exact path='/topic/create' element={<CreateTopicForm userId={userId}/>} />
      <Route exact path='/topic/:topicId/subtopics' element={<SubtopicDashboard />} />
      <Route exact path='/subtopic/:topicId/create' element={<CreateSubtopicForm />} />
      <Route exact path='/:subtopicId/logs' element={<Loglist />} />
      <Route exact path='/subtopic/:subtopicId/edit' element={<EditSubtopicForm />} />
      <Route exact path='/:subtopicId/:logId/editlog' element={<EditLogEntry />} />
    </Routes>
  </div>;
};

ReactDOM.render(
  <Router>
      <App />
  </Router>, document.getElementById('app'));
