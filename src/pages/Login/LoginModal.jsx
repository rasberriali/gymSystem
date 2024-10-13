
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../Assets/samplelogo.png';
import './LoginModal.css';

const LoginModal = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate(); 

  const handleLogin = () => {
   
    const hardcodedEmail = 'admin@example.com';
    const hardcodedPassword = 'password123';

    if (email === hardcodedEmail && password === hardcodedPassword) {
    
      navigate('/admin'); 
      onClose(); 
    } else {
      setErrorMessage('Invalid email or password. Please try again.');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="login-modal-overlay" onClick={onClose}>
      <div className="login-modal-content" onClick={e => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>×</button>
        <div className="login-form">
          <div className="login-logo-container">
            <img src={logo} alt="Logo" className="login-logo" />
          </div>
          <div className="login-fields">
            <input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errorMessage && <div className="error-message">{errorMessage}</div>}
            <button className="login-button" onClick={handleLogin}>Log in</button>
            <a href="/forgot-password" className="forgot-password">Forgot password?</a>
            <a href="/register" className="create-account">Create an account</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
