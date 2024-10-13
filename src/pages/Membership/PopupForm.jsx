import React, { useState } from 'react';
import './PopupForm.css';

const PopupForm = ({ plan, closePopup }) => {
  const [formData, setFormData] = useState({
    name: '',
    contactNumber: '',
    email: '',
    address: '',
    paymentMethod: 'gcash',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    closePopup();
  };

  return (
    <div className="popup-overlay">
      <div className="popup-form">
        <h2>Avail {plan.category}</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input type="text" name="name" value={formData.name} onChange={handleChange} required />
          </label>
          <label>
            Contact Number:
            <input type="text" name="contactNumber" value={formData.contactNumber} onChange={handleChange} required />
          </label>
          <label>
            Email:
            <input type="email" name="email" value={formData.email} onChange={handleChange} required />
          </label>
          <label>
            Address:
            <input type="text" name="address" value={formData.address} onChange={handleChange} required />
          </label>
          <label>
            Payment Method:
            <select name="paymentMethod" value={formData.paymentMethod} onChange={handleChange}>
              <option value="gcash">GCash</option>
              <option value="paymaya">PayMaya</option>
              <option value="bank">Bank</option>
            </select>
          </label>
          <button type="submit">Proceed to Payment</button>
        </form>
        <button className="close-button" onClick={closePopup}>Close</button>
      </div>
    </div>
  );
};

export default PopupForm;
