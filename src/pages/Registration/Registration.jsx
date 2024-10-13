import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Registration.css';

const Registration = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    username: '',
    birthdate: { mm: '', dd: '', yyyy: '' },
    gender: '',
    email: '',
    password: '',
    phoneNumber: '',
    profilePicture: null,
  });

  const [message, setMessage] = useState('');

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    if (name.includes('birthdate.')) {
      const field = name.split('.')[1];
      setFormData((prevData) => ({
        ...prevData,
        birthdate: {
          ...prevData.birthdate,
          [field]: value,
        },
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handlePasswordChange = (event) => {
    const { value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      password: value,
    }));
  };

  const handleProfilePictureChange = (event) => {
    const file = event.target.files[0];
    setFormData((prevData) => ({
      ...prevData,
      profilePicture: file,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { fullName, username, email, password, phoneNumber, birthdate } = formData;
    if (!fullName || !username || !email || !password || !phoneNumber || !birthdate.mm || !birthdate.dd || !birthdate.yyyy || !formData.gender) {
      setMessage('Please fill out all fields.');
      return;
    }

    const data = new FormData();
    data.append('username', username);
    data.append('password', password);
    data.append('email', email);
    data.append('full_name', fullName);
    data.append('birthdate', `${birthdate.yyyy}-${birthdate.mm}-${birthdate.dd}`);
    data.append('gender', formData.gender);
    data.append('phonenumber', phoneNumber);

    if (formData.profilePicture) {
      data.append('profile_picture', formData.profilePicture);
    }

    try {
      const response = await axios.post('http://localhost:8000/api/register/', data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setMessage(response.data.message);
      setFormData({
        fullName: '',
        username: '',
        birthdate: { mm: '', dd: '', yyyy: '' },
        gender: '',
        email: '',
        password: '',
        phoneNumber: '',
        profilePicture: null,
      });

      navigate('/'); 
    } catch (error) {
      if (error.response) {
        setMessage(error.response.data.error || 'Registration failed');
      } else {
        setMessage('An error occurred. Please try again later.');
      }
    }
  };

  return (
    <div className="registration-form">
      <form onSubmit={handleSubmit}>
        <div className="profile-picture">
          <div className="profile-placeholder">
            <button className="add-photo">+</button>
          </div>
        </div>
        <div className="form-fields">
          <input type="file" accept="image/*" onChange={handleProfilePictureChange} />
          <input type="text" name="fullName" placeholder="Full Name" value={formData.fullName} onChange={handleInputChange} />
          <input type="text" name="username" placeholder="Username" value={formData.username} onChange={handleInputChange} />
          <div className="birthdate">
            <input type="text" name="birthdate.mm" placeholder="MM" value={formData.birthdate.mm} onChange={handleInputChange} />
            <input type="text" name="birthdate.dd" placeholder="DD" value={formData.birthdate.dd} onChange={handleInputChange} />
            <input type="text" name="birthdate.yyyy" placeholder="YYYY" value={formData.birthdate.yyyy} onChange={handleInputChange} />
          </div>
          <select name="gender" value={formData.gender} onChange={handleInputChange}>
            <option value="" disabled>Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleInputChange} />
          <button className="verify-button">Verify</button>
          <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handlePasswordChange} />
          <input type="text" name="phoneNumber" placeholder="Phone Number" value={formData.phoneNumber} onChange={handleInputChange} />
          <button type="submit" className="confirm-button">Confirm</button>
        </div>
      </form>
      {message && <p>{message}</p>} {}
    </div>
  );
};

export default Registration;
