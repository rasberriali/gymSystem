import React, { useState } from 'react';
import './BookingsPage.css';

const BookingsPage = () => {
  const [bookings, setBookings] = useState([]);
  const [newBooking, setNewBooking] = useState({ customerName: '', date: '', time: '', type: 'Coach', coach: '' });
  const [showForm, setShowForm] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  const [coaches] = useState(['Coach 1', 'Coach 2', 'Coach 3']);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewBooking({ ...newBooking, [name]: value });
  };

  const handleAddBooking = () => {
    if (editMode) {
      const updatedBookings = [...bookings];
      updatedBookings[editIndex] = { ...newBooking, status: 'Upcoming' };
      setBookings(updatedBookings);
      setEditMode(false);
      setEditIndex(null);
    } else {
      setBookings([...bookings, { ...newBooking, status: 'Upcoming' }]);
    }
    setNewBooking({ customerName: '', date: '', time: '', type: 'Coach', coach: '' });
    setShowForm(false);
  };

  const handleEditBooking = (index) => {
    setNewBooking(bookings[index]);
    setShowForm(true);
    setEditMode(true);
    setEditIndex(index);
  };

  const handleDeleteBooking = (index) => {
    const updatedBookings = [...bookings];
    updatedBookings.splice(index, 1);
    setBookings(updatedBookings);
  };

  const handleCancel = () => {
    setEditMode(false);
    setEditIndex(null);
    setShowForm(false);
    setNewBooking({ customerName: '', date: '', time: '', type: 'Coach', coach: '' });
  };

  return (
    <div className="BookingsPage">
      <div className="layout">
        <div className="sidebar-container">
          {/* Sidebar content here */}
        </div>
        <div className="main-content">
          {!showForm && (
            <button className="add-booking-button" onClick={() => setShowForm(true)}>Add Booking</button>
          )}
          {showForm && (
            <BookingForm
              newBooking={newBooking}
              coaches={coaches}
              handleInputChange={handleInputChange}
              handleAddBooking={handleAddBooking}
              handleCancel={handleCancel}
              editMode={editMode}
            />
          )}
          <BookingsList
            bookings={bookings}
            handleEditBooking={handleEditBooking}
            handleDeleteBooking={handleDeleteBooking}
          />
        </div>
      </div>
    </div>
  );
};

const BookingForm = ({ newBooking, coaches, handleInputChange, handleAddBooking, handleCancel, editMode }) => (
  <div className={`booking-form ${editMode ? 'edit-mode' : ''}`}>
    <h2>{editMode ? 'Edit Booking' : 'Add a New Booking'}</h2>
    <input
      type="text"
      name="customerName"
      placeholder="Customer Name"
      value={newBooking.customerName}
      onChange={handleInputChange}
    />
    <input
      type="date"
      name="date"
      value={newBooking.date}
      onChange={handleInputChange}
    />
    <input
      type="time"
      name="time"
      value={newBooking.time}
      onChange={handleInputChange}
    />
    <select
      name="type"
      value={newBooking.type}
      onChange={handleInputChange}
    >
      <option value="Coach">Coach</option>
      <option value="Rehab Session">Service 1</option>
      <option value="Sport Massage">Service 2</option>
    </select>
    {newBooking.type === 'Coach' && (
      <select
        name="coach"
        value={newBooking.coach}
        onChange={handleInputChange}
      >
        <option value="">Select Coach</option>
        {coaches.map(coach => (
          <option key={coach} value={coach}>{coach}</option>
        ))}
      </select>
    )}
    <div>
      <button onClick={handleAddBooking}>{editMode ? 'Save Changes' : 'Add Booking'}</button>
      <button onClick={handleCancel}>Cancel</button>
    </div>
  </div>
);

const BookingsList = ({ bookings, handleEditBooking, handleDeleteBooking }) => (
  <div className="bookings-list">
    {bookings.map((booking, index) => (
      <BookingItem
        key={index}
        booking={booking}
        handleEdit={() => handleEditBooking(index)}
        handleDelete={() => handleDeleteBooking(index)}
      />
    ))}
  </div>
);

const BookingItem = ({ booking, handleEdit, handleDelete }) => {
  const currentDateTime = new Date();
  const bookingDateTime = new Date(`${booking.date}T${booking.time}`);
  const status = bookingDateTime < currentDateTime ? 'Done' : 'Upcoming';

  return (
    <div className="booking-item">
      <span>{booking.customerName}</span>
      <span>{booking.date}</span>
      <span>{booking.time}</span>
      <span>{booking.type === 'Coach' ? `Coach: ${booking.coach}` : booking.type}</span>
      <span>{status}</span>
      <button onClick={handleEdit}>Edit</button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default BookingsPage;

