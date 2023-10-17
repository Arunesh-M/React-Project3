import React from 'react';
import { Routes,Route } from 'react-router-dom';
import './App.css';
import Log from './log';
import Window from './window'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Log />} />
        <Route path="/window" element={<Window />}/>
      </Routes>
    </div>
  );
}

export default App;
