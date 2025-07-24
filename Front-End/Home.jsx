import React from 'react';
import { useNavigate } from 'react-router-dom';
import Base from '../Components/Base';
import './Home.css'; // External CSS

const Home = () => {
  const navigate = useNavigate();

  return (
    <Base>
      <div className="homepage">
        <div className="overlay">
          <div className="glass-card container text-center">
            <h1 className="display-4 fw-bold text-white">🚀 Welcome to <span className="text-info">BlogSphere</span></h1>
            <p className="lead text-light mt-3 mb-4">
              A modern blogging platform to share ideas, express thoughts, and connect minds. Write. Read. Reflect.
            </p>

            <div className="features text-start text-white mx-auto" style={{ maxWidth: '600px' }}>
              <p>📝 Publish beautifully crafted articles</p>
              <p>💬 Interact and engage with others</p>
              <p>🎯 Your thoughts. Your voice. One platform.</p>
            </div>

            <div className="cta-buttons mt-4">
              <button onClick={() => navigate('/login')} className="btn btn-outline-light me-3">🔐 Login</button>
              <button onClick={() => navigate('/signup')} className="btn btn-info text-white">✍️ Register</button>
            </div>
          </div>
        </div>
      </div>
    </Base>
  );
};

export default Home;
