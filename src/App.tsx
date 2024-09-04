import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Home} from './components/pages/Home'
import {Qbraid} from './components/pages/qBraid'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/qbraid" element={<Qbraid/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
