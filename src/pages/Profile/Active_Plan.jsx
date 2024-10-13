import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Profile.css';

const AccountProfile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [userInfo, setUserInfo] = useState({
    name: 'USER NAME',
    username: '@username',
    phone: '+639391234567',
    email: 'username@email.com',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
    // Save the user info to the server or state management system here
  };

  return (
    <div className="dashboard">
      <div className="user-info">
        <div className="avatar-placeholder"></div>
        <div className="user-details">
          {isEditing ? (
            <div className="edit-form">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={userInfo.name}
                onChange={handleInputChange}
                placeholder="Name"
              />
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                name="username"
                value={userInfo.username}
                onChange={handleInputChange}
                placeholder="Username"
              />
              <label htmlFor="phone">Phone</label>
              <input
                type="text"
                id="phone"
                name="phone"
                value={userInfo.phone}
                onChange={handleInputChange}
                placeholder="Phone"
              />
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={userInfo.email}
                onChange={handleInputChange}
                placeholder="Email"
              />
            </div>
          ) : (
            <>
              <h2>{userInfo.name}</h2>
              <p>{userInfo.username}</p>
              <p>{userInfo.phone}</p>
              <p>{userInfo.email}</p>
            </>
          )}
        </div>
        <div className="user-actions">
          {isEditing ? (
            <button onClick={handleSaveClick}>Save</button>
          ) : (
            <button onClick={handleEditClick}>Edit Profile</button>
          )}
          <button>QR Code</button>
        </div>
      </div>

        <div className="user-stats">
            <div className="stat-item">
                <i className="fa-regular fa-calendar"></i>
                <div className="stat-content">
                    <span className="value">30</span>
                    <span className="label">Check in</span>
                </div>
              </div>
            <div className="stat-item">
                <i className="fa-regular fa-calendar"></i>
                <div className="stat-content">
                    <span className="value">25</span>
                    <span className="label">Bookings</span>
                </div>
            </div>
            <div className="stat-item">
                <i className="fa-regular fa-calendar"></i>
                <div className="stat-content">
                    <span className="value">Active</span>
                    <span className="label">Status</span>
                </div>
            </div>
        </div>

      <div className="tabs">
        <div className="tab-button">
          <Link to="/active-plan"><button className="active">ACTIVE PLAN</button></Link>
          <Link to="/bookings"><button className="bookings">BOOKINGS</button></Link>
        </div>
        <div className="active-plan">
          <div className="plan-details">
            <div className="plan-name">
              <h1>PLAN NAME</h1>
              <p>PHP 1,800.00/month</p>
            </div>
            <div className="plan-dates">
              <div className="plan-start">
                <h2>July 27, 2024</h2>
                <p>Subscription date</p>
              </div>
              <div className="plan-end">
                <h2>January 27, 2025</h2>
                <p>Expiration date</p>
              </div>
            </div>
            <div className="unsubscribe">
              <button className="plan-button">Unsubscribe</button>
            </div>
          </div>
          <div className="vertical-line-one"></div>
          <div className="plan-details-right">
            <div className="plan-info">
              <p>Lorem ipsum odor amet, consectetuer adipiscing elit. Curabitur leo habitasse finibus natoque gravida duis dui dis. Turpis feugiat aliquet placerat ligula porta; cursus arcu elit. Nulla diam natoque pulvinar nunc fermentum aptent inceptos. Dis risus nunc tincidunt dis ullamcorper potenti litora risus. Conubia congue ante sapien sociosqu ad. Semper tincidunt est montes vulputate faucibus conubia. Lacinia adipiscing diam torquent integer bibendum aliquam. Luctus aliquam consequat class viverra ipsum pretium torquent. Volutpat dui ultrices maecenas fames conubia sodales est. Platea enim quam dui platea, blandit fusce. Condimentum vestibulum per malesuada mattis; magna commodo lectus. Dis orci arcu faucibus quis scelerisque. Facilisi neque sed commodo tellus curae. Placerat lobortis pulvinar maecenas fermentum sagittis ligula.</p>
            </div>
            <div className="plan-inclusion">
              <p>Inclusions:</p>
            <ul className="inclusions">
              <li>Lorem ipsum</li>
              <li>Lorem ipsum</li>
              <li>Lorem ipsum</li>
              <li>Lorem ipsum</li>
            </ul>
          </div>
            </div>
          
          </div>
        </div>
      </div>
  );
};

export default AccountProfile;
