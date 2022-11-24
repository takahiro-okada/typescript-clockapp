import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import RegisterClock from './components/pages/RegisterClock';
import UsersAll from './components/pages/UsersAll';
import RegisterPlace from './components/pages/RegisterPlace';
import Footer from './components/Organisms/Footer';
import Header from './components/Organisms/Header';

const App = () => (
  <div className="App flex flex-col min-h-screen">
    <Header />
    <main className="flex-1 overflow-x-hidden">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register-clock" element={<RegisterClock />} />
        <Route path="/register-place" element={<RegisterPlace />} />
        <Route path="/users" element={<UsersAll />} />
      </Routes>
    </main>
    <Footer />
  </div>
);

export default App;
