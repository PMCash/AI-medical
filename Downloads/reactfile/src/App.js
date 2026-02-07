import React from 'react';
import HealthChecker from './components/HealthChecker';
import FloatingAvatar from './components/FloatingAvatar';
import './App.css';

function App() {
  return (
    <div className="App">
      <FloatingAvatar />
      <div className="container">
        <HealthChecker />
      </div>
    </div>
  );
}

export default App;