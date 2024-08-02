import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Login from './Login';
import Register from './Register';
import Dashboard from './Dashboard';
import Projects from './Projects';
import Project from './Project';
import Tasks from './Tasks';
import Task from './Task';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} exact />
        <Route path="/register" element={<Register />} exact />
        <Route path="/my-app" element={<Dashboard />} exact />
        <Route path="/projects" element={<Projects />} exact />
        <Route path="/project" element={<Project />} exact />
        <Route path="/tasks" element={<Tasks />} exact />
        <Route path="/task" element={<Task />} exact />
      </Routes>
    </BrowserRouter>
  );
};

export default App;