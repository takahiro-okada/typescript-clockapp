import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit
          <code>src/App.tsx</code>
          and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Updated By Oka
        </a>
        <button type="button" className="px-6 py-2 bg-green-300">
          OK
        </button>
      </header>
    </div>
  );
}

export default App;
