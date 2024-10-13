import React, { useState } from 'react';
import sampleImage from '../../Assets/sample_home.jpg';
import './Membership.css';
import PopupForm from './PopupForm';
import Promo from './Promo';

const plans = [
  {
    category: 'General Fitness',
    price: 'Php 1,800 /month',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed facilisis lacus elementum lacus auctor, vitae accumsan sem efficitur. Aliquam eget hendrerit massa, quis finibus orci. Praesent pellentesque eu enim ac mattis. Vivamus interdum pulvinar eleifend. Sed ornare, nulla quis pharetra vulputate, mi magna hendrerit ex, quis viverra erat sapien sit amet libero.',
  },
  {
    category: 'Fitness for Kids',
    price: 'Php 1,500 /month',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed facilisis lacus elementum lacus auctor, vitae accumsan sem efficitur. Aliquam eget hendrerit massa, quis finibus orci. Praesent pellentesque eu enim ac mattis. Vivamus interdum pulvinar eleifend. Sed ornare, nulla quis pharetra vulputate, mi magna hendrerit ex, quis viverra erat sapien sit amet libero.',
  },
  {
    category: 'Fitness for Special Needs',
    price: 'Php 1,500 /month',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed facilisis lacus elementum lacus auctor, vitae accumsan sem efficitur. Aliquam eget hendrerit massa, quis finibus orci. Praesent pellentesque eu enim ac mattis. Vivamus interdum pulvinar eleifend. Sed ornare, nulla quis pharetra vulputate, mi magna hendrerit ex, quis viverra erat sapien sit amet libero.',
  },
  {
    category: 'Fitness for Students/Senior/PWD',
    price: 'Php 1,500 /month',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed facilisis lacus elementum lacus auctor, vitae accumsan sem efficitur. Aliquam eget hendrerit massa, quis finibus orci. Praesent pellentesque eu enim ac mattis. Vivamus interdum pulvinar eleifend. Sed ornare, nulla quis pharetra vulputate, mi magna hendrerit ex, quis viverra erat sapien sit amet libero.',
  },
];

const Membership = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);

  const handleAvailClick = (plan) => {
    setSelectedPlan(plan);
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
    setSelectedPlan(null);
  };

  return (
    <div className="membership-container">
      <header className="membership-header">
        <div className="image-container">
          <img src={sampleImage} alt="Fitness" className="header-image" />
          <div className="overlay-text">
            <span className="line1">EVERY</span><br />
            <span className="line2">WORKOUT</span><br />
            <span className="line3">COUNTS!</span>
          </div>
        </div>
      </header>
      <Promo />
      <div className="plans-header">
        <h1>CHOOSE YOUR PLAN</h1>
      </div>
      <div className="container">
        <div className="plans-row">
          {plans.map((plan, index) => (
            <div key={index} className="plan-box">
              <h3>{plan.category}</h3>
              <h4>{plan.price}</h4>
              <p>{plan.description}</p>
              <h4>Inclusions:</h4>
              <ul className="inclusions">
                <li>Inclusion 1</li>
                <li>Inclusion 2</li>
                <li>Inclusion 3</li>
              </ul>
              <button className="avail-button" onClick={() => handleAvailClick(plan)}>AVAIL NOW</button>
            </div>
          ))}
        </div>
      </div>
      {showPopup && <PopupForm plan={selectedPlan} closePopup={closePopup} />}
    </div>
  );
};

export default Membership;
