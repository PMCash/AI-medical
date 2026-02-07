import React, { useState } from 'react';
import '../styles/FloatingAvatar.css';
import femaleAvatar from '../assets/female-avatar.png';

const FloatingAvatar = ({ 
  externalLink = 'https://example.com',
  bmiLink = 'https://example.com/bmi',
  gymLink = 'https://example.com/gym',
  consultationLink = 'https://example.com/consultation'
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleAvatarClick = () => {
    if (externalLink) {
      window.open(externalLink, '_blank');
    } else {
      setShowModal(!showModal);
    }
  };

  const handleBMIClick = () => {
    if (bmiLink) {
      window.open(bmiLink, '_blank');
    }
  };

  const handleGymClick = () => {
    if (gymLink) {
      window.open(gymLink, '_blank');
    }
  };

  const handleConsultationClick = () => {
    if (consultationLink) {
      window.open(consultationLink, '_blank');
    }
  };

  return (
    <>
      {/* Floating Avatar */}
      <div 
        className={`floating-avatar ${isHovered ? 'hovered' : ''}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleAvatarClick}
      >
        {/* Avatar Container */}
        <div className="avatar-container">
          <img 
            src={femaleAvatar}
            className="avatar-image"
            alt="Female Avatar"
          />
        </div>

        {/* Message Bubble */}
        <div className={`message-bubble ${isHovered ? 'show' : ''}`}>
          <p>Let us check your BMI and You can also Visit our Gym here!</p>
          <div className="bubble-pointer"></div>
        </div>

        {/* Click Indicator */}
        <div className="click-indicator">
          {!showModal && <span>💬 Click me!</span>}
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="avatar-modal-overlay" onClick={() => setShowModal(false)}>
          <div className="avatar-modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setShowModal(false)}>×</button>
            
            <h2>Welcome to Our Wellness Program! 💪</h2>
            
            <div className="modal-content">
              <div className="modal-section">
                <h3>📊 Check Your BMI</h3>
                <p>Calculate your Body Mass Index to understand your health status better.</p>
                <button className="modal-btn" onClick={handleBMIClick}>Calculate BMI Now</button>
              </div>

              <div className="modal-section">
                <h3>🏋️ Visit Our Gym</h3>
                <p>Join our state-of-the-art fitness facility and start your health journey today!</p>
                <button className="modal-btn" onClick={handleGymClick}>Explore Our Gym</button>
              </div>

              <div className="modal-section">
                <h3>🏥 Health Consultation</h3>
                <p>Get personalized health advice from our AI-powered health checker.</p>
                <button className="modal-btn" onClick={handleConsultationClick}>Get Health Advice</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FloatingAvatar;
