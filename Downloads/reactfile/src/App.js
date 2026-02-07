import React from 'react';
import HealthChecker from './components/HealthChecker';
import FloatingAvatar from './components/FloatingAvatar';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* 
        Floating Avatar with External Links
        
        Props you can customize:
        - externalLink: Main link when avatar is clicked (opens in new tab)
        - bmiLink: BMI calculator link
        - gymLink: Gym website link
        - consultationLink: Health consultation link
        
        Example:
        <FloatingAvatar 
          externalLink="https://yourgym.com"
          bmiLink="https://yourgym.com/bmi-calculator"
          gymLink="https://yourgym.com/membership"
          consultationLink="https://yourgym.com/consultation"
        />
      */}
      <FloatingAvatar 
        externalLink="https://example.com"
        bmiLink="https://example.com/bmi"
        gymLink="https://example.com/gym"
        consultationLink="https://example.com/health"
      />
      
      <div className="container">
        <HealthChecker />
      </div>
    </div>
  );
}

export default App;