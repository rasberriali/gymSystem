import React, { useState } from 'react';
import './Registration.css';

const Registration = () => {
  const [password, setPassword] = useState('');

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <div className="registration-form">
      <div className="profile-picture">
        <div className="profile-placeholder">
          <button className="add-photo">+</button>
        </div>
      </div>
      <div className="form-fields">
        <input type="text" placeholder="Full Name" />
        <input type="text" placeholder="Username" />
        <div className="birthdate">
          <input type="text" placeholder="MM" />
          <input type="text" placeholder="DD" />
          <input type="text" placeholder="YYYY" />
        </div>
        <select>
          <option value="" disabled selected>Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
        <input type="email" placeholder="Email Address" />
        <button className="verify-button">Verify</button>
        <input type="password" placeholder="Password" value={password} onChange={handlePasswordChange} />
        <input type="text" placeholder="Phone Number" />
        <button className="confirm-button">Confirm</button>
      </div>
    </div>
  );
};

export default Registration;
