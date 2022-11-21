import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import RegisterClock from './components/pages/RegisterClock';
import UsersAll from './components/pages/UsersAll';
import RegisterPlace from './components/pages/RegisterPlace';

const App = () => (
  <div className="App">
    <h1>Routing</h1>
    <ul>
      <li>
        <a href="/">Home</a>
      </li>
      <li>
        <a href="/register-clock">RegisterClock</a>
      </li>
      <li>
        <a href="/register-place">RegisterPlace</a>
      </li>
      <li>
        <a href="/users">UsersAll</a>
      </li>
    </ul>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register-clock" element={<RegisterClock />} />
      <Route path="/register-place" element={<RegisterPlace />} />
      <Route path="/users" element={<UsersAll />} />
    </Routes>
  </div>
);

export default App;
