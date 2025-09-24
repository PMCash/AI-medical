import React, { useState } from 'react';
import Header from './Header';
import NewsCarousel from './NewsCarousel';
import Footer from './Footer';

const HealthChecker = () => {
  const [formData, setFormData] = useState({
    age: '',
    gender: '',
    symptoms: '',
    duration: '',
    severity: '',
    medicalHistory: ''
  });
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.symptoms) {
      setError('Please describe your symptoms.');
      return;
    }

    setLoading(true);
    setError('');
    setResponse('');

    try {
      // Replace this URL with your actual Render backend URL
      const BACKEND_URL = 'https://your-backend-name.onrender.com';
      
      const response = await fetch(`${BACKEND_URL}/api/analyze-symptoms`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to analyze symptoms');
      }

      setResponse(data.analysis);
    } catch (err) {
      console.error('Error calling backend:', err);
      setError(err.message || 'Failed to get response from Dr. AI. Please check your backend URL.');
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setFormData({
      age: '',
      gender: '',
      symptoms: '',
      duration: '',
      severity: '',
      medicalHistory: ''
    });
    setResponse('');
    setError('');
  };

  return (
    <div>
      {/* Professional Header */}
      <Header />
      
      <div className="health-checker">
        <div className="main-content-header">
          <h2 className="section-title">Health Assessment Form</h2>
          <p className="section-subtitle">
            Provide your symptoms and medical information for AI-powered analysis
          </p>
          <div className="tech-studio-credit">
            <span className="tech-badge">⚡ Powered by Techstudio24-365 Limited Technology</span>
          </div>
        </div>

      <form onSubmit={handleSubmit} className="symptoms-form">
        <div className="form-group">
          <label htmlFor="age">Age:</label>
          <input
            type="number"
            id="age"
            name="age"
            value={formData.age}
            onChange={handleInputChange}
            placeholder="Enter your age"
            min="1"
            max="120"
          />
        </div>

        <div className="form-group">
          <label htmlFor="gender">Gender:</label>
          <select
            id="gender"
            name="gender"
            value={formData.gender}
            onChange={handleInputChange}
          >
            <option value="">Select gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
            <option value="prefer-not-to-say">Prefer not to say</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="symptoms">Symptoms *:</label>
          <textarea
            id="symptoms"
            name="symptoms"
            value={formData.symptoms}
            onChange={handleInputChange}
            placeholder="Describe your symptoms in detail..."
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="duration">How long have you had these symptoms?</label>
          <select
            id="duration"
            name="duration"
            value={formData.duration}
            onChange={handleInputChange}
          >
            <option value="">Select duration</option>
            <option value="less-than-24-hours">Less than 24 hours</option>
            <option value="1-3-days">1-3 days</option>
            <option value="4-7-days">4-7 days</option>
            <option value="1-2-weeks">1-2 weeks</option>
            <option value="2-4-weeks">2-4 weeks</option>
            <option value="more-than-month">More than a month</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="severity">Severity:</label>
          <select
            id="severity"
            name="severity"
            value={formData.severity}
            onChange={handleInputChange}
          >
            <option value="">Select severity</option>
            <option value="mild">Mild</option>
            <option value="moderate">Moderate</option>
            <option value="severe">Severe</option>
            <option value="very-severe">Very Severe</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="medicalHistory">Medical History:</label>
          <textarea
            id="medicalHistory"
            name="medicalHistory"
            value={formData.medicalHistory}
            onChange={handleInputChange}
            placeholder="Any relevant medical history, current medications, allergies..."
          />
        </div>

        <button type="submit" className="submit-btn" disabled={loading}>
          {loading ? '🤖 Dr. AI is analyzing...' : '🔍 Get Dr. AI Analysis'}
        </button>
      </form>

      {loading && (
        <div className="loading">
          <div>🤖 Dr. AI is examining your symptoms...</div>
          <div style={{ fontSize: '14px', marginTop: '10px' }}>Connecting to your Render backend...</div>
        </div>
      )}

      {error && (
        <div className="error">
          <strong>Error:</strong> {error}
          <div style={{ fontSize: '14px', marginTop: '10px' }}>
            Make sure to update the BACKEND_URL in the code with your actual Render URL
          </div>
        </div>
      )}

      {response && (
        <div className="response">
          <h3>
            �� Dr. AI's Analysis
          </h3>
          <div className="response-content">
            {response.split('\n').map((line, index) => (
              <p key={index}>{line}</p>
            ))}
          </div>
          <button 
            onClick={resetForm}
            style={{
              marginTop: '15px',
              background: '#28a745',
              color: 'white',
              border: 'none',
              padding: '10px 20px',
              borderRadius: '5px',
              cursor: 'pointer'
            }}
          >
            🔄 New Consultation
          </button>
        </div>
      )}

      <div className="disclaimer">
        <strong>⚠️ Important Disclaimer:</strong> This AI health checker is for informational purposes only and is not a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition. Never disregard professional medical advice or delay in seeking it because of something you have read here. If you think you may have a medical emergency, call your doctor or emergency services immediately.
      </div>

      {/* Medical News Carousel */}
      <NewsCarousel />
      
      {/* Professional Footer */}
      <Footer />
      </div>
    </div>
  );
};

export default HealthChecker;
