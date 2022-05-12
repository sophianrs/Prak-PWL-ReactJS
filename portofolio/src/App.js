import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

// import page
import Landing from './component/landing/landing';
import Project from './component/project/Project';
import Skill from './component/skill/skill';

function App() {
  return (
  <div>
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/project" element={<Project />} />
          <Route path="/skill" element={<Skill />} />
        </Routes>
      </Router>
      {/* <Landing/>
    <Project/>
    <Skill/> */}
    </div>
  </div>
  );
}

export default App;
