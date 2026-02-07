import React, { useState } from 'react';
import '../styles/FloatingAvatar.css';

const FloatingAvatar = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      {/* Floating Avatar */}
      <div 
        className={`floating-avatar ${isHovered ? 'hovered' : ''}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleClick}
      >
        {/* Avatar Container */}
        <div className="avatar-container">
          <svg 
            viewBox="0 0 100 100" 
            className="avatar-svg"
            alt="Female Avatar"
          >
            {/* Head */}
            <circle cx="50" cy="35" r="20" fill="#f4a460" />
            
            {/* Hair */}
            <path d="M 30 35 Q 30 15 50 15 Q 70 15 70 35" fill="#8b4513" />
            <ellipse cx="50" cy="20" rx="22" ry="15" fill="#8b4513" />
            
            {/* Eyes */}
            <circle cx="45" cy="32" r="2.5" fill="#333" />
            <circle cx="55" cy="32" r="2.5" fill="#333" />
            
            {/* Smile */}
            <path d="M 45 38 Q 50 41 55 38" stroke="#333" strokeWidth="1.5" fill="none" strokeLinecap="round" />
            
            {/* Body */}
            <rect x="38" y="55" width="24" height="30" rx="5" fill="#ff69b4" />
            
            {/* Arms */}
            <rect x="20" y="60" width="18" height="8" rx="4" fill="#f4a460" />
            <rect x="62" y="60" width="18" height="8" rx="4" fill="#f4a460" />
            
            {/* Legs */}
            <rect x="42" y="85" width="6" height="15" fill="#333" />
            <rect x="52" y="85" width="6" height="15" fill="#333" />
          </svg>
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
                <button className="modal-btn">Calculate BMI Now</button>
              </div>

              <div className="modal-section">
                <h3>🏋️ Visit Our Gym</h3>
                <p>Join our state-of-the-art fitness facility and start your health journey today!</p>
                <button className="modal-btn">Explore Our Gym</button>
              </div>

              <div className="modal-section">
                <h3>🏥 Health Consultation</h3>
                <p>Get personalized health advice from our AI-powered health checker.</p>
                <button className="modal-btn">Get Health Advice</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FloatingAvatar;
