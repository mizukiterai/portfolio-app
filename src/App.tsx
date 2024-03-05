import React from 'react';
import logo from './pizza.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          My favorite food and below is my LinkedIn Page
        </p>
        <a
          className="App-link"
          href="https://www.linkedin.com/in/mizuki-terai-a35bb1166/"
          target="_blank"
          rel="noopener noreferrer"
        >
          My Linkedin Page
        </a>
      </header>
    </div>
  );
}

export default App;
