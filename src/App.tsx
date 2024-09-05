import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Home} from './components/pages/Home'
import {Qbraid} from './components/pages/qBraid'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Academics } from './components/pages/Academics';
import { YayNay } from './components/pages/YayNay';
import { Projects } from './components/pages/Projects';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/qbraid" element={<Qbraid/>}/>
          <Route path="/yaynay" element={<YayNay/>}/>
          <Route path="/academics" element={<Academics/>}/>
          <Route path="/projects" element={<Projects/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
