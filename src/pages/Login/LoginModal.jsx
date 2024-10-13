import React, { useState } from 'react';
import axios from 'axios';
import logo from '../../Assets/samplelogo.png';
import './LoginModal.css';

const LoginModal = ({ isOpen, onClose, onLoginSuccess }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/api/login/', {
        username: username,
        password: password
      });
      
      const { access, refresh, account_type } = response.data;
      
      if (account_type) {
        localStorage.setItem('token', access);
        localStorage.setItem('refreshToken', refresh);
        localStorage.setItem('account_type', account_type);

        onLoginSuccess(username, account_type);

        console.log("Account Type:", account_type);

        onClose(); 
      } else {
        console.error("Account Type is undefined in response");
      }

    } catch (error) {
      setError('Invalid username or password');
    }
  };

  if (!isOpen) return null;


  return (
    <div className="login-modal-overlay" onClick={onClose}>
      <div className="login-modal-content" onClick={e => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>×</button>
        <div className="login-form">
          <div className="login-logo-container">
            <img src={logo} alt="gym" className="login-logo" />
          </div>
          <div className="login-fields">
            <input
              type="text"
              placeholder="Username" 
              value={username}
              onChange={(e) => setUsername(e.target.value)} 
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            
            <button className="login-button" onClick={handleLogin}>Log in</button>
            {error && <div className="error-message">{error}</div>} {}
            <a href="/forgot-password" className="forgot-password">Forgot password?</a>
            <a href="/register" className="create-account">Create an account</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
