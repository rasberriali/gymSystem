import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Profile.css';

const coachbookings = [
    { id: 'C-0001', coachName: 'Coach 1', date: '08/01/24', time: '2:00 PM', bookingDate: '07/27/24', status: 'Confirmed' },
    { id: 'C-0002', coachName: 'Coach 2', date: '08/02/24', time: '2:00 PM', bookingDate: '07/28/24', status: 'Pending' },
    { id: 'C-0003', coachName: 'Coach 3', date: '08/03/24', time: '2:00 PM', bookingDate: '07/29/24', status: 'Pending' },
];

const servicebookings = [
    { id: 'S-0001', serviceName: 'Service Name Service Provider', date: '08/01/24', time: '2:00 PM', bookingDate: '07/27/24', status: 'Confirmed' },
    { id: 'S-0002', serviceName: 'Service Name Service Provider', date: '08/02/24', time: '2:00 PM', bookingDate: '07/28/24', status: 'Confirmed' },
    { id: 'S-0003', serviceName: 'Service Name Service Provider', date: '08/03/24', time: '2:00 PM', bookingDate: '07/29/24', status: 'Confirmed' },
];

const Bookings = () => {
    const [activeSection, setActiveSection] = useState('coaches');

    return (
        <div className="dashboard">
            <div className="user-info">
                <div className="avatar-placeholder"></div>
                <div className="user-details">
                    <h2>USER NAME</h2>
                    <p>@username</p>
                    <p>+639391234567</p>
                    <p>username@email.com</p>
                </div>
                <div className="user-actions">
                    <button>Edit Profile</button>
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
                <div className="bookings-section">
                    <div className="action-buttons">
                        <div className="icon-container">
                            <i class="fa-solid fa-user"></i>
                            <button 
                                className={`coaches-button ${activeSection === 'coaches' ? 'active' : ''}`}
                                onClick={() => setActiveSection('coaches')}
                            >
                                COACHES
                            </button>
                        </div>
                        <div className="icon-container">
                            <i class="fa-solid fa-spa"></i>
                            <button 
                                className={`services-button ${activeSection === 'services' ? 'active' : ''}`}
                                onClick={() => setActiveSection('services')}
                            >
                                SERVICES
                            </button>
                        </div>
                    </div>
                    {activeSection === 'coaches' && (
                    <div className="table-container">
                        <div className="sub-buttons-container">
                            <Link className="sub-buttons" to="/bookings"><p>Your Bookings</p></Link><br/>
                            <Link className="sub-buttons" to="/coaches-history"><p>History</p></Link>
                            <div className="vertical-line"></div>
                        </div>
                            <table className="bookings-table">
                                <thead>
                                    <tr>
                                        <th>Booking ID</th>
                                        <th>Coach Name</th>
                                        <th>Date</th>
                                        <th>Time</th>
                                        <th>Booking Date</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {coachbookings.map((booking) => (
                                        <tr key={booking.id}>
                                            <td>{booking.id}</td>
                                            <td>{booking.coachName}</td>
                                            <td>{booking.date}</td>
                                            <td>{booking.time}</td>
                                            <td>{booking.bookingDate}</td>
                                            <td>{booking.status}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                    {activeSection === 'services' && (
                    <div className="table-container">
                        <div className="sub-buttons-container">
                            <Link className="sub-buttons" to="/bookings"><p>Your Bookings</p></Link>
                            <Link className="sub-buttons" to="/coaches-history"><p>History</p></Link>
                            <div className="vertical-line"></div>
                        </div>
                            <table className="bookings-table">
                                <thead>
                                    <tr>
                                        <th>Booking ID</th>
                                        <th>Service Name</th>
                                        <th>Date</th>
                                        <th>Time</th>
                                        <th>Booking Date</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {servicebookings.map((booking) => (
                                        <tr key={booking.id}>
                                            <td>{booking.id}</td>
                                            <td>{booking.serviceName}</td>
                                            <td>{booking.date}</td>
                                            <td>{booking.time}</td>
                                            <td>{booking.bookingDate}</td>
                                            <td>{booking.status}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Bookings;
